import { Hono } from "hono";
import { db } from "../db/index.js";
import { address } from "../db/schema.js";
import { eq, desc } from "drizzle-orm";

const addressRoute = new Hono();

//////////////////////////////////////////////////
// GET → Get user addresses
//////////////////////////////////////////////////
addressRoute.get("/", async (c) => {
  try {
    const userId = c.req.query("userId");

    if (!userId) {
      return c.json({ error: "userId required" }, 400);
    }

    const data = await db
      .select()
      .from(address)
      .where(eq(address.userId, userId))
      .orderBy(desc(address.createdAt));

    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch addresses" }, 500);
  }
});

//////////////////////////////////////////////////
// POST → Add address
//////////////////////////////////////////////////
addressRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    if (!body.id || !body.userId) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const newAddress = await db
      .insert(address)
      .values(body)
      .returning();

    return c.json(newAddress[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to create address" }, 500);
  }
});

//////////////////////////////////////////////////
// PUT → Update address
//////////////////////////////////////////////////
addressRoute.put("/", async (c) => {
  try {
    const body = await c.req.json();
    const { id, ...data } = body;

    if (!id) {
      return c.json({ error: "Address ID required" }, 400);
    }

    const updated = await db
      .update(address)
      .set(data)
      .where(eq(address.id, id))
      .returning();

    return c.json(updated[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to update address" }, 500);
  }
});

//////////////////////////////////////////////////
// DELETE → Delete address
//////////////////////////////////////////////////
addressRoute.delete("/", async (c) => {
  try {
    const body = await c.req.json();
    const { id } = body;

    if (!id) {
      return c.json({ error: "Address ID required" }, 400);
    }

    await db.delete(address).where(eq(address.id, id));

    return c.json({ success: true });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to delete address" }, 500);
  }
});

export default addressRoute;