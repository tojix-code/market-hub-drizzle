import { Hono } from "hono";
import { serve } from "@hono/node-server";
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

// Create app
const app = new Hono();

// CORS
app.use("*", cors());

// ✅ Create API group
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

// ✅ Global prefix
app.route("/api", api);

// Root test
app.get("/", (c) => {
  return c.text("🚀 Hono backend running successfully");
});

// Start server
serve({
  fetch: app.fetch,
  port: 3000,
});