'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { getPins } from '../lib/data-fetch'
import safeFetch from '../lib/safe-fetch'
import { SignOutButton } from "@clerk/nextjs"


export default function Default() {
    const router = useRouter()
    const size = 400
    
    return (
        <div id='loading-screen' style={{backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Image src="/logo-2.svg" alt="redirect logo" width={size} height={size} onLoad={() => router.push('/map')} />
        </div>
    )       
}