import Link from "next/link";
import Image from "next/image";
import '../../styles/header.css'
import SearchBar from "./SearchBar";


export default function Header({}) {
    return (
        <header className="header">
            <div id="logo_header">
                <img src="/public/logo.png"  alt="LocalFest logo" /> {/*style="height:40px;width:40px;object-fit:contain;"*/}
                <Link href="/home"> <h1>LocalFest.cz</h1> </Link>
            </div>
            <SearchBar />
            <nav className="nav">
                <Link href="/events" className="links_header"> Eventy </Link>
                <Link href="/home/about" className="links_header"> O Nás </Link>
                <Link href="/home/kontakt" className="links_header"> Kontakty </Link>
                <Link href="/auth/login" className="login_singup"> Přihlásit se </Link>
                <Link href="/auth/signup" className="login_singup"> Zaregistrovat se </Link>
            </nav>
        </header>
    )
}