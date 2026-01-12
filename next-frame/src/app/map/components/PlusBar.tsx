import '../../styles/plusbar.css'
import Link from 'next/link'

export default function PlusBar({signedIn}: {signedIn: boolean}) {
    return (
        <div className="dropdown">
            <Link href="/add_event">
                <button className="round-btn" id="ddToggle" title="Open menu" style={{fontSize: "xx-large", color:"#d4ecff"}}> + </button>
            </Link>
        {
            signedIn? /*if signedIn*/
                <div className="menu" id="ddMenu" role="menu">
                    <a href="add_pin_form.html" role="menuitem">Přidat</a>
                    <a href="user_account_info.html" role="menuitem">Váš účet</a>
                    <a href="project_info_o_nas.html" role="menuitem">O nás</a>
                </div>   
            :/*else*/
                <></>
        }
        </div>
    )
}
