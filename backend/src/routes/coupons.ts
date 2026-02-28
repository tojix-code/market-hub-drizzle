import { Hono } from "hono";
import { db } from "../db";
import { coupon } from "../db/schema";

const couponRoute = new Hono();

//////////////////////////////////////////////////
// GET all coupons
//////////////////////////////////////////////////
couponRoute.get("/", async (c) => {
  try {
    const data = await db.select().from(coupon);
    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch coupons" }, 500);
  }
});

//////////////////////////////////////////////////
// CREATE coupon
//////////////////////////////////////////////////
couponRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    // Basic validation
    if (!body.code || !body.discount || !body.expiresAt) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const newCoupon = await db
      .insert(coupon)
      .values({
        code: body.code,
        description: body.description,
        discount: body.discount,
        forNewUser: body.forNewUser,
        forMember: body.forMember,
        isPublic: body.isPublic,
        expiresAt: body.expiresAt,
      })
      .returning();

    return c.json(newCoupon[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to create coupon" }, 500);
  }
});

export default couponRoute;