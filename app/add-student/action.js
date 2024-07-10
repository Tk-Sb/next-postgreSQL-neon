'use server'

import { revalidatePath } from "next/cache"
import { db } from "../_db/db"
import { studentsTable } from "../_db/schema"
import { z } from "zod"

export async function create(prevState, formData){
    const schema = z.object({
        firstName: z.string().nonempty(),
        lastName: z.string().nonempty(),
        notes: z.array()
    })
    const data = schema.parse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        notes: []
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