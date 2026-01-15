import '../../styles/plusbar.css'
import Link from 'next/link'

export default function PlusBar({signedIn}: {signedIn: boolean}) {
    return (
        <>
        <div className="dropdown">
            <Link href="/add_event" className='link-in-btn'>
                <button className="round-btn" id="ddToggle" title="Open menu" style={{fontSize: "60px", color:"#d4ecff"}}> + </button>
            </Link>
        {
            signedIn? /*if signedIn*/
                <div className="menu" id="ddMenu" role="menu">
                    <a href="add_pin_form.html" role="menuitem">Přidat</a>
                    <a href="user_account_info.html" role="menuitem">Váš účet</a>
                    <a href="project_info_o_nas.html" role="menuitem">O nás</a>
                </div>   
            :/*else*/
                <div className="menu" id="ddMenu" role="menu" aria-labelledby="ddToggle">
                    <p>Přidávat piny můžete jen jako pořadatel, chcete se zaregistrovat? <button type='submit'><a href='signin_form'>Zaregistrovat se</a></button></p>
                    <a href="project_info_o_nas.html" role="menuitem">O nás</a>
                </div>
        }
        </div>
        </>
    )
}
