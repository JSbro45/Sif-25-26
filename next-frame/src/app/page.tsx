
//import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import { getPins } from '../lib/data-fetch'


export default function Default() {
    //const router = useRouter()
    const pins = async () => await getPins({start: new Date("2025-01-01"), end: new Date('2026-30-05')}, []) 
    console.log(pins())
    return (
        <div id='loading-screen' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: '#fff', backgroundColor: '#000'}}>
            {/* <Image width={300} height={300} alt='logo' src='/logo.svg' onLoad={() => router.push('/map')}/> */}
            {
                Array.isArray(pins) ? (
                    pins.map(pin => (
                        <div key={pin.id}>
                            <h3>{pin.title}</h3>
                            <p>{pin.description}</p>
                        </div>
                    ))
                ) : null
            }
        </div>
    )
}