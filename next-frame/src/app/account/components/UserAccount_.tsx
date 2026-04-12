'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { findUserByClerkId } from "@/src/lib/data-fetch"
import { Show, useUser, SignOutButton} from "@clerk/nextjs"
import safeFetch from "@/src/lib/safe-fetch"


export function ProfileUI({ children }: { children: React.ReactNode }) {
    return (
        <div className="container">
            {children}
            <SignOutButton>
                <button> Odhlásit se </button>
            </SignOutButton>
            <button> změnit údaje </button>
        </div>
    )
}

export function EventViewUI({ children }: { children: React.ReactNode }) {
    /* // multiple evnt views system
    const [cardNumber, setCardNumber] = useState<number>(0)
    const evtViews = []
    return (
        <div className="container">
            <div className='cards' style={{display:'flex'}}>
               {
                  [].map( (evt, k) => 
                     <button className='evt-card' key={k} onClick={()=> setCardNumber(k)}>
                        {'akce '+(k+1)}
                     </button>
                  )
               }
            </div>
            */
    return(
        <div className="container">
            {children}
        </div>
    )
}

export function UserAuthComponent({ userId, children }: { userId: string | null, children: React.ReactNode }) {
    const findUser = (clerkId: string | undefined) => safeFetch(() => findUserByClerkId(clerkId), null)
    const router = useRouter()
    const { isSignedIn, user, isLoaded } = useUser()

    useEffect(() => { 
        if (isLoaded && !isSignedIn) router.push('/forms/auth/login') 
    }, [isLoaded, isSignedIn, router])

    if(!isLoaded) return <img src="/logo.png" alt="Loading..." />

    if(isSignedIn){
        return <Show when="signed-in"> { children } </Show>
    }
    else {
        router.push('/forms/auth/login')
    }
}
