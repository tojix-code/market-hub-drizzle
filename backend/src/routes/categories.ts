import { Hono } from "hono";
import { db } from "../db";
import { category } from "../db/schema";

const categoryRoute = new Hono();

//////////////////////////////////////////////////
// GET categories
//////////////////////////////////////////////////
categoryRoute.get("/", async (c) => {
  try {
    const data = await db.select().from(category);
    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch categories" }, 500);
  }
});

//////////////////////////////////////////////////
// CREATE category
//////////////////////////////////////////////////
categoryRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    if (!body.id || !body.name || !body.createdBy) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const newCategory = await db
      .insert(category)
      .values({
        id: body.id,
        name: body.name,
        createdBy: body.createdBy,
      })
      .returning();

    return c.json(newCategory[0]);
  } catch (error: any) {
    console.error(error);

    // Handle duplicate category
    if (error?.code === "23505") {
      return c.json({ error: "Category already exists" }, 400);
    }

    return c.json({ error: "Failed to create category" }, 500);
  }
});

export default categoryRoute;