import { db } from "../_db/db";
import { studentsTable } from "../_db/schema";

export default async function allStudents(){
    const data = await db.select().from(studentsTable)
    
    return(
        <>
            {data.map(({ id, firstName, lastName, notes }) => (
                <p key={id}>Student {firstName} {lastName}</p>
            ))}
        </>
    )
}