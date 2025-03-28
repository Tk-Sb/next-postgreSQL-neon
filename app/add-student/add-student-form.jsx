'use client'

import { useActionState } from 'react'
import { createStudent } from "./action"

export default function AddStudentForm(){
    const [state, action, isPending] = useActionState(createStudent, null);

    return (
        <>
            <form action={action}>
                <input type="text" required name="firstName" placeholder="first name" />
                <input type="text" required name="lastName" placeholder="last name" />
                <button type="submit" disabled={isPending} className="bg-red-50">
                    {!isPending && <h1>Add</h1>}
                    {isPending && <h1>Adding...</h1>}
                </button>
            </form>
        </>
    )
}
