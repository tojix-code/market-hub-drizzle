import { Hono } from "hono";
import { db } from "../db";
import { payment } from "../db/schema";
import { eq } from "drizzle-orm";

const paymentRoute = new Hono();

//////////////////////////////////////////////////
// GET → Get payments of order
//////////////////////////////////////////////////
paymentRoute.get("/", async (c) => {
  try {
    const orderId = c.req.query("orderId");

    if (!orderId) {
      return c.json({ error: "orderId required" }, 400);
    }

    const data = await db
      .select()
      .from(payment)
      .where(eq(payment.orderId, orderId));

    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch payments" }, 500);
  }
});

//////////////////////////////////////////////////
// POST → Create payment
//////////////////////////////////////////////////
paymentRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    if (!body.id || !body.orderId || !body.amount) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const newPayment = await db
      .insert(payment)
      .values({
        id: body.id,
        orderId: body.orderId,
        amount: body.amount,
        method: body.method,
        transactionId: body.transactionId,
        status: body.status,
        gatewayResponse: body.gatewayResponse,
        paidAt: body.paidAt,
      })
      .returning();

    return c.json(newPayment[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to create payment" }, 500);
  }
});

//////////////////////////////////////////////////
// PUT → Update payment status
//////////////////////////////////////////////////
paymentRoute.put("/", async (c) => {
  try {
    const body = await c.req.json();
    const { id, ...data } = body;

    if (!id) {
      return c.json({ error: "Payment ID required" }, 400);
    }

    const updated = await db
      .update(payment)
      .set(data)
      .where(eq(payment.id, id))
      .returning();

    return c.json(updated[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to update payment" }, 500);
  }
});

export default paymentRoute;