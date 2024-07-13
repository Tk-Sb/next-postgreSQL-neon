import { db } from "@/app/_db/db"
import { studentsTable } from "@/app/_db/schema"
import { eq } from "drizzle-orm"

export default async function studentById({ params }){
    // returns an array of objects [ { } ] but after the array destructuring it returns an object { }, returns undefined when id is not found
    const [search] = await db.select().from(studentsTable).where(eq(studentsTable.id, params.studentID))
    const searchResult = search ? search : "Not found" // { firstName, lastName, notes[] }

    return (
        <>  
            {/* student id found */}
            {search  && 
                <>
                    <h1>{searchResult.firstName} {searchResult.lastName}</h1>
                    {searchResult.notes.map((note) => (
                        <p key={searchResult.notes.indexOf(note)}>{note}</p>
                    ))}
                </>
            }

            {/* student id NOT found */}
            {!search && 
                <>
                    <h1>Not found</h1>
                </>
            }
        </>
    )
}