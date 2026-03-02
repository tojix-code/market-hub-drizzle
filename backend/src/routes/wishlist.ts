import { Hono } from "hono";
import { db } from "../db/index.js";
import { wishlist, product } from "../db/schema.js";
import { eq, and } from "drizzle-orm";

const wishlistRoute = new Hono();

//////////////////////////////////////////////////
// GET → Get wishlist of a user
//////////////////////////////////////////////////
wishlistRoute.get("/", async (c) => {
  try {
    const userId = c.req.query("userId");

    if (!userId) {
      return c.json({ error: "userId required" }, 400);
    }

    const data = await db
      .select({
        wishlist,
        product,
      })
      .from(wishlist)
      .leftJoin(product, eq(wishlist.productId, product.id))
      .where(eq(wishlist.userId, userId));

    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch wishlist" }, 500);
  }
});

//////////////////////////////////////////////////
// POST → Add to wishlist
//////////////////////////////////////////////////
wishlistRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, productId } = body;

    if (!userId || !productId) {
      return c.json({ error: "userId and productId required" }, 400);
    }

    // Check duplicate (because composite PK)
    const exists = await db
      .select()
      .from(wishlist)
      .where(
        and(eq(wishlist.userId, userId), eq(wishlist.productId, productId))
      );

    if (exists.length > 0) {
      return c.json({ message: "Already in wishlist" });
    }

    const item = await db
      .insert(wishlist)
      .values({ userId, productId })
      .returning();

    return c.json(item[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to add wishlist" }, 500);
  }
});

//////////////////////////////////////////////////
// DELETE → Remove from wishlist
//////////////////////////////////////////////////
wishlistRoute.delete("/", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, productId } = body;

    if (!userId || !productId) {
      return c.json({ error: "userId and productId required" }, 400);
    }

    await db
      .delete(wishlist)
      .where(
        and(eq(wishlist.userId, userId), eq(wishlist.productId, productId))
      );

    return c.json({ success: true });
  } catch (error) {
    console.error(error);
    return c.json({ error: "Delete failed" }, 500);
  }
});

export default wishlistRoute;