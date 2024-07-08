import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { studentsTable } from "./schema"

const sql = neon(process.env.DATABASE_URL)
const db = drizzle(sql)

export async function addStudent(firstName, lastName, notes){
    const studentData = {
        firstName: firstName,
        lastName: lastName,
        notes: notes
    }
    await db.insert(studentsTable).values(studentData)
}