import Link from "next/link";
import Image from "next/image";


const SearchBar = () => 
    <form className="search-container" role="search" action="#">
        <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 21l-4.35-4.35" stroke="#05549f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#05549f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input className="search-input" type="search" />
        <button className="search-button" type="submit"> Hledat </button>
    </form>

export default function Header() {
    return (
        <header>
            <div id="logo_header">
<<<<<<< HEAD
            <Image src="/static/logo.png" width={40} height={40} alt="LocalFest logo" /> {/*style="height:40px;width:40px;object-fit:contain;"*/}
            <Link href="/home"> <h1>LocalFest.cz</h1> </Link>
=======
                <img src="/static/logo.png" alt="LocalFest logo" /> {/*style="height:40px;width:40px;object-fit:contain;"*/}
                <a href="/home">
                    <h1>LocalFest.cz</h1>
                </a>
>>>>>>> main
            </div>
            <SearchBar />
            <nav>
                <Link href="/events" className="links_header"> Eventy </Link>
<<<<<<< HEAD
                <Link href="/o_nas" className="links_header"> O Nás </Link>
                <Link href="/kontakt" className="links_header"> Kontakty </Link>
                <Link href="/login" className="login_singup"> Přihlásit se </Link>
                <Link href="/signup" className="login_singup"> Zaregistrovat se </Link>
=======
                <Link href="/about" className="links_header"> O nás </Link>
                <Link href="/contact" className="links_header"> Kontakt </Link>
                <Link href="/auth/login" className="login_singup"> Přihlásit se </Link>
                <Link href="/auth/signup" className="login_singup"> Zaregistrovat se </Link>
>>>>>>> main
            </nav>
        </header>
    )
}