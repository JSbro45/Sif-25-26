'use client'

import { SignOutButton, useAuth, UserProfile, useUser } from "@clerk/nextjs"



export default function Account() {
    const { isSignedIn, user, isLoaded } = useUser()
    
    return (
        <div className="container">
            <SignOutButton>
                <button> Odhlásit se </button>
            </SignOutButton>
            {isSignedIn? <h2>{user.fullName}</h2>: <h2>uzivatel neni prihlaseny</h2>}
        </div>
    )
}