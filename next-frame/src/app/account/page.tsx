'use client'

import { SignOutButton, useAuth, UserProfile, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function Account() {
    const router = useRouter()
    const { isSignedIn, user, isLoaded } = useUser()
    console.log('signed in? ',isSignedIn,'name:',user)
    
    useEffect(() => {
        if (isLoaded && !isSignedIn) router.push('/forms/auth/login')
    }, [isLoaded, isSignedIn, router])

    return (
        <div className="container">
            <SignOutButton>
                <button> Odhlásit se </button>
            </SignOutButton>
            {
                <h2 style={{color:'red'}}> 
                    {( isSignedIn && isLoaded )? user.fullName:'uzivatel neni prihlaseny'} 
                </h2> 
            }
        </div>
    )
}

