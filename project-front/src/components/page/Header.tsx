import { useState } from 'react'
import SearchBar from './SearchBar'


export default function Header() {
    return (
        <header>
            <div id="logo_header">
                <img src="/static/logo.png" alt="LocalFest logo" /> {/*style="height:40px;width:40px;object-fit:contain;"*/}
                <a href="/">
                    <h1>LocalFest.cz</h1>
                </a>
            </div>
            <SearchBar/>
            <nav>
                <a href="/events" className="links_header"> Events </a>
                <a href="/about" className="links_header"> About </a>
                <a href="/contact" className="links_header"> Contact </a>
                <a href="/login" className="login_singup"> Log In </a>
                <a href="/signup" className="login_singup"> Sign Up </a>
            </nav>
        </header>
    )
}