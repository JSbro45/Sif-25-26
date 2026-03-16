'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { getPins } from '../lib/data-fetch'
import safeFetch from '../lib/safe-fetch'



export default function Default() {
    const router = useRouter()
    // const pins = safeFetch(() => getPins({start: new Date("2025-01-01"), end: new Date('2026-30-05')}, []), [])
    const size = 120
    return (
        <div id='loading-screen'>
            <Image src="/logo.png" alt="redirect logo" width={size} height={size} onLoadingComplete={() => router.push('/map')} />
        </div>
    )
}