'use server'

import { db } from "../_db/db"
import { studentsTable } from "../_db/schema"
import { z } from "zod"
import { eq } from "drizzle-orm"

export async function login(prevState, formData){
    // login schema
    const schema = z.object({
        userName: z.string().nonempty(),
        password: z.string().nonempty()
    })
    // get form data
    const data = schema.parse({
        userName: formData.get("username"),
        password: formData.get("password")
    })

    // search table for username
    try{
        // returns { }
        const [result] = await db.select().from(studentsTable).where(eq(studentsTable.userName, data.userName))
        
        if(result){
            // user found
            console.log(result)
            if(data.password === result.password){
                // correct password
                console.log("all good")
            }
            else{
                // incorrect password
                console.log("Wrong password")
            }
        }
        else{
            // user not found
            console.log("Not found")
        }

        return "logged in"
    }
    catch(error){
        console.log(error)
        return "failed to login"
    }
}