import { Hono } from "hono";
import { db } from "../db/index.js";
import { order, orderItem, user } from "../db/schema.js";
import { eq } from "drizzle-orm";

const orderRoute = new Hono();

//////////////////////////////////////////////////
// GET all orders
//////////////////////////////////////////////////
orderRoute.get("/", async (c) => {
  try {
    const data = await db
      .select({
        order,
        user,
        orderItem,
      })
      .from(order)
      .leftJoin(user, eq(order.userId, user.id))
      .leftJoin(orderItem, eq(order.id, orderItem.orderId));

    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch orders" }, 500);
  }
});

//////////////////////////////////////////////////
// CREATE order
//////////////////////////////////////////////////
orderRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    // Validation
    if (!body.id || !body.userId || !body.total) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const newOrder = await db
      .insert(order)
      .values({
        id: body.id,
        total: body.total,
        status: body.status || "ORDER_PLACED",
        userId: body.userId,
        storeId: body.storeId,
        addressId: body.addressId,
      })
      .returning();

    // Insert order items (important)
    if (body.items && body.items.length > 0) {
      const items = body.items.map((item: any) => ({
        orderId: body.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      }));

      await db.insert(orderItem).values(items);
    }

    return c.json(newOrder[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to create order" }, 500);
  }
});

export default orderRoute;