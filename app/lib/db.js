import { neon } from "@neondatabase/serverless"

export async function getData() {
    const sql = neon(process.env.DATABASE_URL)
    const data = await sql`INSERT INTO students (student_firstname, student_lastname, student_class) VALUES (tk, sb, 100);`
    return data
}