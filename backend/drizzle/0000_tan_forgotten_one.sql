CREATE TABLE "address" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"street" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zip" text NOT NULL,
	"country" text NOT NULL,
	"phone" text NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "category" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"createdBy" text NOT NULL,
	"isApproved" boolean DEFAULT true,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "category_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "coupon" (
	"code" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"discount" double precision NOT NULL,
	"forNewUser" boolean NOT NULL,
	"forMember" boolean DEFAULT false,
	"isPublic" boolean NOT NULL,
	"expiresAt" timestamp NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "order" (
	"id" text PRIMARY KEY NOT NULL,
	"total" double precision NOT NULL,
	"status" text NOT NULL,
	"userId" text NOT NULL,
	"storeId" text NOT NULL,
	"addressId" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "orderItem" (
	"orderId" text NOT NULL,
	"productId" text NOT NULL,
	"quantity" integer NOT NULL,
	"price" double precision NOT NULL,
	CONSTRAINT "orderItem_orderId_productId_pk" PRIMARY KEY("orderId","productId")
);
--> statement-breakpoint
CREATE TABLE "payment" (
	"id" text PRIMARY KEY NOT NULL,
	"orderId" text NOT NULL,
	"amount" double precision NOT NULL,
	"method" text NOT NULL,
	"transactionId" text,
	"status" text,
	"gatewayResponse" jsonb,
	"paidAt" timestamp,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "payment_transactionId_unique" UNIQUE("transactionId")
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"mrp" double precision NOT NULL,
	"price" double precision NOT NULL,
	"images" text[] NOT NULL,
	"inStock" boolean DEFAULT true,
	"categoryId" text NOT NULL,
	"storeId" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "rating" (
	"id" text PRIMARY KEY NOT NULL,
	"rating" integer NOT NULL,
	"review" text NOT NULL,
	"userId" text,
	"productId" text,
	"orderId" text,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "store" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"username" text NOT NULL,
	"address" text NOT NULL,
	"status" text DEFAULT 'pending',
	"isActive" boolean DEFAULT false,
	"logo" text NOT NULL,
	"email" text NOT NULL,
	"contact" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "store_userId_unique" UNIQUE("userId"),
	CONSTRAINT "store_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image" text NOT NULL,
	"cart" jsonb,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "wishlist" (
	"userId" text NOT NULL,
	"productId" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "wishlist_userId_productId_pk" PRIMARY KEY("userId","productId")
);
