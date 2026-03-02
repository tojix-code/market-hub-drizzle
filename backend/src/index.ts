import { Hono } from "hono";
import { cors } from "hono/cors";

// Routes
import userRoute from "./routes/users";
import storeRoute from "./routes/stores";
import categoryRoute from "./routes/categories";
import productRoute from "./routes/products";
import orderRoute from "./routes/orders";
import paymentRoute from "./routes/payments";
import wishlistRoute from "./routes/wishlist";
import ratingRoute from "./routes/ratings";
import couponRoute from "./routes/coupons";
import addressRoute from "./routes/address";

const app = new Hono();

// CORS
app.use("*", cors());

// API
const api = new Hono();

api.route("/users", userRoute);
api.route("/stores", storeRoute);
api.route("/categories", categoryRoute);
api.route("/products", productRoute);
api.route("/orders", orderRoute);
api.route("/payments", paymentRoute);
api.route("/wishlist", wishlistRoute);
api.route("/ratings", ratingRoute);
api.route("/coupons", couponRoute);
api.route("/addresses", addressRoute);

app.route("/api", api);

app.get("/", (c) => c.text("🚀 Hono backend running successfully"));

// ✅ Start server ONLY in local
if (process.env.NODE_ENV !== "production") {
  const { serve } = await import("@hono/node-server");
  serve({
    fetch: app.fetch,
    port: 3000,
  });
}

// ✅ Export for Vercel
export default app;