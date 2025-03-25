import { pgTable, text, serial, varchar, decimal, timestamp, boolean } from "drizzle-orm/pg-core";

export const plants = pgTable("plants", {
  plantId: serial("plant_id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  scientificName: varchar("scientific_name", { length: 255 }),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  plantType: varchar("plant_type", { length: 100 }),
  image: text("image").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  isActive: boolean("is_active").notNull().default(true),
});
  