import { Hono } from "hono";
import { db } from "../db";
import { user } from "../db/schema";

const userRoute = new Hono();

//////////////////////////////////////////////////
// GET all users
//////////////////////////////////////////////////
userRoute.get("/", async (c) => {
  try {
    const data = await db.select().from(user);
    return c.json(data);
  } catch (error) {
    return c.json({ error: "Failed to fetch users" }, 500);
  }
});

//////////////////////////////////////////////////
// CREATE user
//////////////////////////////////////////////////
userRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    // basic validation (important)
    if (!body.id || !body.name || !body.email) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const newUser = await db.insert(user).values({
      id: body.id,
      name: body.name,
      email: body.email,
      image: body.image,
    }).returning();

    return c.json(newUser[0]);
  } catch (error) {
    return c.json({ error: "Failed to create user" }, 500);
  }
});

export default userRoute;