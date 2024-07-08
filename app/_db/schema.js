import { serial, text, pgTable } from "drizzle-orm/pg-core"

// create link table
export const linksTable = pgTable("Link", {
    id: serial("Id").primaryKey().notNull(),
    name: text("name").notNull()
})

// create students table
export const studentsTable = pgTable("Students", {
    id: serial("id").primaryKey().notNull(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull()
})