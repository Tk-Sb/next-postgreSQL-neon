'use server'

import { revalidatePath } from "next/cache"
import { db } from "../_db/db"
import { studentsTable } from "../_db/schema"
import { z } from "zod"
import { eq } from "drizzle-orm"

export async function createStudent(prevState, formData){
    // form schema + the database schema
    const schema = z.object({
        firstName: z.string().nonempty(),
        lastName: z.string().nonempty(),
        notes: z.array(),
        userName: z.string().nonempty(),
        password: z.string().nonempty()
    })

    // get the entered data + enter default data
    const data = schema.parse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        notes: [],
        userName: `${formData.get('firstName')} ${formData.get('lastName')}`,
        password: await generatePassword()
    })

    try{
        await db.insert(studentsTable).values(data)

        revalidatePath("/")
    }
    catch(error){
        console.log(error)
        
        return "failed"
    }
}

async function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        result += characters.charAt(randomIndex)
    }
    if(await db.select().from(studentsTable).where(eq(studentsTable.password, result))){
        return result;
    }
    else{
        generatePassword()
    }
}