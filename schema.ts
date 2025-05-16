import { pgTable, uuid, varchar, timestamp, index } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    hashedPassword: varchar("hashed_password", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
  },
  (table) => {
    return {
      emailIdx: index("idx_users_email").on(table.email),
    };
  }
);

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
