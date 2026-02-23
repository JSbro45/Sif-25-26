import Link from "next/link";
import Image from "next/image";
import '../../styles/header.css'
import SearchBar from "./SearchBar";

const SearchBar = () => 
    <form className="search-container" role="search" action="#">
        <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 21l-4.35-4.35" stroke="#025a09" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="#025a09" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input className="search-input" type="search" />
        <button className="search-button" type="submit"> Hledat </button>
    </form>

export default function Header({}) {
    return (
        <header className="header">
            <div id="logo_header">
            <img src="../public/icons/next/logo.svg"  alt="LocalFest logo" className="logo"/> {/*style="height:40px;width:40px;object-fit:contain;"*/}
            <Link href="/home" id="title"> <h1>LocalFest.cz</h1> </Link>
            </div>
            <SearchBar />
            <nav className="nav">
                <Link href="/events" className="links_header"> Eventy </Link>
                <Link href="/home/about" className="links_header"> O Nás </Link>
                <Link href="/home/kontakt" className="links_header"> Kontakty </Link>
                <Link href="/auth/login" id="login"> Přihlásit se </Link>
                <Link href="/auth/signup" id="signup"> Zaregistrovat se </Link>
            </nav>
        </header>
    )
}