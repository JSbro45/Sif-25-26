import '../../styles/plusbar.css'
import Link from 'next/link'

export default function PlusBar({signedIn}: {signedIn: boolean}) {
    if (signedIn) {
    return (
        <Link href="/forms/add_event" className='link-in-btn'>
            <button className="round-btn" id="ddToggle" title="Open menu" style={{fontSize: "xx-large", color:"#ecfd00"}}>
                 <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="feather feather-plus"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                 </svg>
            </button>
        </Link>
        )
    }
}
