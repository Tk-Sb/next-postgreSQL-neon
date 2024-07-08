import { linksTable } from "./schema"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL)
const db = drizzle(sql)

export async function addLink() {
    const newLink = {url: "hello world"}
    console.log("DB respond")
    return await db.insert(linksTable).values(newLink)
}
