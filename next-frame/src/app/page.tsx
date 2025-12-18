'use client'
 
import { useRouter } from 'next/navigation'
import Image from 'next/image'


export default function Default() {
    const router = useRouter()
    return (
        <div id='loading-screen'>
            <Image width={300} height={300} alt='logo' src='/logo.svg' onLoad={() => router.push('/map')}/>
        </div>
    )
}