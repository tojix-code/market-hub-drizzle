import { Hono } from "hono";
import { db } from "../db/index.js";
import { rating, user } from "../db/schema.js";
import { eq, and } from "drizzle-orm";

const ratingRoute = new Hono();

//////////////////////////////////////////////////
// GET → Get ratings of product
//////////////////////////////////////////////////
ratingRoute.get("/", async (c) => {
  try {
    const productId = c.req.query("productId");

    if (!productId) {
      return c.json({ error: "productId is required" }, 400);
    }

    const data = await db
      .select({
        rating,
        user,
      })
      .from(rating)
      .leftJoin(user, eq(rating.userId, user.id))
      .where(eq(rating.productId, productId));

    return c.json(data);
  } catch (error) {
    console.error("Rating GET error:", error);
    return c.json({ error: "Failed to fetch ratings" }, 500);
  }
});

//////////////////////////////////////////////////
// POST → Add new rating
//////////////////////////////////////////////////
ratingRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const { rating: score, review, userId, productId, orderId } = body;

    if (!score || !userId || !productId || !orderId) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Duplicate check (user can rate product once per order)
    const exists = await db
      .select()
      .from(rating)
      .where(
        and(
          eq(rating.userId, userId),
          eq(rating.productId, productId),
          eq(rating.orderId, orderId)
        )
      );

    if (exists.length > 0) {
      return c.json({ error: "You already rated this product" }, 400);
    }

    const newRating = await db
      .insert(rating)
      .values({
        id: crypto.randomUUID(), // auto ID
        rating: score,
        review,
        userId,
        productId,
        orderId,
      })
      .returning();

    return c.json(newRating[0]);
  } catch (error) {
    console.error("POST rating error:", error);
    return c.json({ error: "Failed to add rating" }, 500);
  }
});

//////////////////////////////////////////////////
// DELETE → Remove rating
//////////////////////////////////////////////////
ratingRoute.delete("/", async (c) => {
  try {
    const body = await c.req.json();
    const { id } = body;

    if (!id) {
      return c.json({ error: "Rating ID required" }, 400);
    }

    await db.delete(rating).where(eq(rating.id, id));

    return c.json({ success: true });
  } catch (error) {
    console.error("DELETE rating error:", error);
    return c.json({ error: "Failed to delete rating" }, 500);
  }
});

export default ratingRoute;