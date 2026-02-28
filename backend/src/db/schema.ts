import {
  pgTable,
  text,
  boolean,
  timestamp,
  jsonb,
  doublePrecision,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

//////////////////////////////////////////////////
// USER
//////////////////////////////////////////////////

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  image: text("image").notNull(),
  cart: jsonb("cart"),
});

//////////////////////////////////////////////////
// STORE
//////////////////////////////////////////////////

export const store = pgTable("store", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  username: text("username").notNull().unique(),
  address: text("address").notNull(),
  status: text("status").default("pending"),
  isActive: boolean("isActive").default(false),
  logo: text("logo").notNull(),
  email: text("email").notNull(),
  contact: text("contact").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

//////////////////////////////////////////////////
// CATEGORY
//////////////////////////////////////////////////

export const category = pgTable("category", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
  createdBy: text("createdBy").notNull(),
  isApproved: boolean("isApproved").default(true),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

//////////////////////////////////////////////////
// PRODUCT
//////////////////////////////////////////////////

export const product = pgTable("product", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  mrp: doublePrecision("mrp").notNull(),
  price: doublePrecision("price").notNull(),
  images: text("images").array().notNull(),
  inStock: boolean("inStock").default(true),
  categoryId: text("categoryId").notNull(),
  storeId: text("storeId").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

//////////////////////////////////////////////////
// ADDRESS
//////////////////////////////////////////////////

export const address = pgTable("address", {
  id: text("id").primaryKey(),
  userId: text("userId").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  street: text("street").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zip: text("zip").notNull(),
  country: text("country").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

//////////////////////////////////////////////////
// ORDER
//////////////////////////////////////////////////

export const order = pgTable("order", {
  id: text("id").primaryKey(),
  total: doublePrecision("total").notNull(),
  status: text("status").notNull(),
  userId: text("userId").notNull(),
  storeId: text("storeId").notNull(),
  addressId: text("addressId").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

//////////////////////////////////////////////////
// PAYMENT
//////////////////////////////////////////////////

export const payment = pgTable("payment", {
  id: text("id").primaryKey(),
  orderId: text("orderId").notNull(),
  amount: doublePrecision("amount").notNull(),
  method: text("method").notNull(),
  transactionId: text("transactionId").unique(),
  status: text("status"),
  gatewayResponse: jsonb("gatewayResponse"),
  paidAt: timestamp("paidAt"),
  createdAt: timestamp("createdAt").defaultNow(),
});

//////////////////////////////////////////////////
// ORDER ITEM (JUNCTION)
//////////////////////////////////////////////////

export const orderItem = pgTable(
  "orderItem",
  {
    orderId: text("orderId").notNull(),
    productId: text("productId").notNull(),
    quantity: integer("quantity").notNull(),
    price: doublePrecision("price").notNull(),
  },
  (t) => ({
    pk: primaryKey(t.orderId, t.productId),
  })
);

//////////////////////////////////////////////////
// RATING
//////////////////////////////////////////////////

export const rating = pgTable("rating", {
  id: text("id").primaryKey(),
  rating: integer("rating").notNull(),
  review: text("review").notNull(),
  userId: text("userId"),
  productId: text("productId"),
  orderId: text("orderId"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

//////////////////////////////////////////////////
// COUPON
//////////////////////////////////////////////////

export const coupon = pgTable("coupon", {
  code: text("code").primaryKey(),
  description: text("description").notNull(),
  discount: doublePrecision("discount").notNull(),
  forNewUser: boolean("forNewUser").notNull(),
  forMember: boolean("forMember").default(false),
  isPublic: boolean("isPublic").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

//////////////////////////////////////////////////
// WISHLIST (JUNCTION)
//////////////////////////////////////////////////

export const wishlist = pgTable(
  "wishlist",
  {
    userId: text("userId").notNull(),
    productId: text("productId").notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
  },
  (t) => ({
    pk: primaryKey(t.userId, t.productId),
  })
);