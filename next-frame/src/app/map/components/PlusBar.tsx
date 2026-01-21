import '../../styles/plusbar.css'
import Link from 'next/link'

export default function PlusBar({signedIn}: {signedIn: boolean}) {
    if (signedIn) {
    return (
        <Link href="/add_event" className='link-in-btn'>
            <button className="round-btn" id="ddToggle" title="Open menu" style={{fontSize: "xx-large", color:"#d4ecff"}}> + </button>
        </Link>
        )
    }
}
