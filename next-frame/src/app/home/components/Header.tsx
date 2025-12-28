//import { useState } from 'react'
import Link from 'next/link'
import SearchBar from './SearchBar'


export default function Header() {
    return (
        <header>
            <div id="logo_header">
                <img src="/static/logo.png" alt="LocalFest logo" /> {/*style="height:40px;width:40px;object-fit:contain;"*/}
                <a href="/home">
                    <h1>LocalFest.cz</h1>
                </a>
            </div>
            <SearchBar/>
            <nav>
                <Link href="/events" className="links_header"> Eventy </Link>
                <Link href="/about" className="links_header"> O nás </Link>
                <Link href="/contact" className="links_header"> Kontakt </Link>
                <Link href="/auth/login" className="login_singup"> Přihlásit se </Link>
                <Link href="/auth/signup" className="login_singup"> Zaregistrovat se </Link>
            </nav>
        </header>
    )
}