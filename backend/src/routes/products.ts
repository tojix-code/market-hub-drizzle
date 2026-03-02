import { Hono } from "hono";
import { db } from "../db/index.js";
import { product, category, store } from "../db/schema.js";
import { eq } from "drizzle-orm";

const productRoute = new Hono();

//////////////////////////////////////////////////
// GET all products
//////////////////////////////////////////////////
productRoute.get("/", async (c) => {
  try {
    const data = await db
      .select({
        product,
        category,
        store,
      })
      .from(product)
      .leftJoin(category, eq(product.categoryId, category.id))
      .leftJoin(store, eq(product.storeId, store.id));

    return c.json(data);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to fetch products" }, 500);
  }
});

//////////////////////////////////////////////////
// CREATE product
//////////////////////////////////////////////////
productRoute.post("/", async (c) => {
  try {
    const body = await c.req.json();

    // Validation
    if (!body.id || !body.name || !body.categoryId || !body.storeId) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    const newProduct = await db
      .insert(product)
      .values({
        id: body.id,
        name: body.name,
        description: body.description,
        mrp: body.mrp,
        price: body.price,
        images: body.images,
        categoryId: body.categoryId,
        storeId: body.storeId,
      })
      .returning();

    return c.json(newProduct[0]);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Failed to create product" }, 500);
  }
});

export default productRoute;