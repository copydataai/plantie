CREATE TABLE "plants" (
	"plant_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"scientific_name" varchar(255),
	"price" numeric(10, 2) NOT NULL,
	"plant_type" varchar(100),
	"image" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"is_active" boolean DEFAULT true NOT NULL
);
