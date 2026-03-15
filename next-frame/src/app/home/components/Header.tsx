import Link from "next/link";
import Image from "next/image";
import '../../styles/header.css'
import SearchBar from "./SearchBar";

export default function Header({}) {
    return (
        <header className="header">
            <div id="logo_header">
                <img src="/logo-3.png"  alt="LocalFest logo" className="logo" style={{height:"100px",width:"300px"}}/> {/*style="height:40px;width:40px;object-fit:contain;"*/}
            </div>
            <SearchBar />
            <nav className="nav">
                <Link href="/events" className="links_header"> Eventy </Link>
                <Link href="/home/about" className="links_header"> O Nás </Link>
                <Link href="/home/kontakt" className="links_header"> Kontakty </Link>
                <Link href="/forms/auth/login" id="login"> Přihlásit se </Link>
                <Link href="/forms/auth/signup" id="signup"> Zaregistrovat se </Link>
            </nav>
        </header>
    )
}