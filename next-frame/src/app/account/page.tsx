'use client'

import { Show, SignOutButton, useAuth, UserProfile, useUser } from "@clerk/nextjs"
import UserAccountInfo from "./components/UserAccountInfo"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { findUserByClerkId } from "@/src/lib/data-fetch"
import safeFetch from "@/src/lib/safe-fetch"


export default function Account() {
    const findUser = (clerkId: string | undefined) => safeFetch(() => findUserByClerkId(clerkId), null)

    const router = useRouter()
    const { isSignedIn, user, isLoaded } = useUser()
    useEffect(() => { 
        if (isLoaded && !isSignedIn) router.push('/forms/auth/login') 
    }, [isLoaded, isSignedIn, router])

    if(!isLoaded) return <img src="/logo.png" alt="Loading..." />

    if(isSignedIn) return (
        <Show when={'signed-in'}>
            <UserAccountInfo user={findUser(user?.id)} />
        </Show>
    )
}
