'use client'

import { useActionState } from 'react'
import { login } from "./action"

export default function LoginForm(){
    
    const [state, action, isPending] = useActionState(login, null)

    return(
        <>
            <form action={action}>
                <input type="text" required name="username" placeholder="username"/>
                <input type="text" required name="password" placeholder="password"/>
                <button type="submit" disabled={isPending} className="bg-red-50">
                    {!isPending && <h1>Login</h1>}
                    {isPending && <h1>Logging...</h1>}
                </button>
            </form>
        </>
    )
}