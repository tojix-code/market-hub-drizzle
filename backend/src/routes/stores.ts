import { Hono } from "hono";
import { db } from "../db/index.js";
import { store, user } from "../db/schema.js";
import { eq } from "drizzle-orm";

const storeRoute = new Hono();

//////////////////////////////////////////////////
// GET all stores with user
//////////////////////////////////////////////////
storeRoute.get("/", async (c) => {
  try {
    const data = await db
      .select({
        store,
        user,
      })
      .from(store)
      .leftJoin(user, eq(store.userId, user.id));

    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch stores" }, 500);
  }
});

//////////////////////////////////////////////////
// CREATE store
//////////////////////////////////////////////////
storeRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    // Basic validation
    if (!body.id || !body.userId || !body.name) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const newStore = await db
      .insert(store)
      .values({
        id: body.id,
        userId: body.userId,
        name: body.name,
        description: body.description,
        username: body.username,
        address: body.address,
        logo: body.logo,
        email: body.email,
        contact: body.contact,
      })
      .returning();

    return c.json(newStore[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to create store" }, 500);
  }
});

export default storeRoute;