import { serial, text, pgTable, varchar } from "drizzle-orm/pg-core"

// create students table
export const studentsTable = pgTable("Students", {
    id: serial("id").primaryKey().notNull(), // searching/rendering rule
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    notes: varchar("notes").array(),
    // login credentials
    userName:varchar("username").notNull(),
    password: varchar("password").notNull()
})