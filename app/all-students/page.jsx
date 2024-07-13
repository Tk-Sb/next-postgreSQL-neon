import Link from "next/link";
import { db } from "../_db/db";
import { studentsTable } from "../_db/schema";

export default async function allStudents(){
    // get all data from table
    const data = await db.select().from(studentsTable)
    
    return(
        <>
            {data.map(({ id, firstName, lastName, notes }) => (
                <Link href={`/all-students/${id}`}>
                    <p key={id}>Student {firstName} {lastName}</p>
                </Link>
            ))}
        </>
    )
}