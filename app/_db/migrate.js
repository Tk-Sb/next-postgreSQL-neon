import { drizzle } from "drizzle-orm/neon-http"
import { migrate } from "drizzle-orm/neon-http/migrator"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL) // database connection using neon serverless driver

const db = drizzle(sql) // new database instance using drizzle ORM

async function main(){
    try{
        await migrate(db, {
            migrationsFolder: './app/_db/migrations'
        })
        console.log("migration was successful")
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

main()