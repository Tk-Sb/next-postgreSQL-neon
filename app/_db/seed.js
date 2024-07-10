import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import { studentsTable } from "./schema"
import { db } from "./db"

export async function addStudent(firstName, lastName){
    const studentData = {
        firstName: firstName,
        lastName: lastName,
        notes: []
    }
    await db.insert(studentsTable).values(studentData)
}