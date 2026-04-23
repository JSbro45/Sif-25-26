import Link from "next/link";
import Image from "next/image";
import '../../styles/header.css'
import SearchBar from "./SearchBar";
import { Show, SignOutButton, UserButton } from "@clerk/nextjs";

export default function Header({}) {
    return (
        <header className="header">

            <div id="logo_header">
                <Link href="/home">                
                    <img src="/logo-3.png"  alt="LocalFest logo" className="logo" style={{height:"100px",width:"300px"}}/> {/*style="height:40px;width:40px;object-fit:contain;"*/}
                </Link>
            </div>
            <SearchBar />
            <nav className="nav">
                <Link href="/events" className="links_header"> Eventy </Link>
                <Link href="/home/about" className="links_header"> O Nás </Link>
                <Show when={'signed-out'}>
                    <Link href="/forms/auth/sign-in" className="links_header"> <button id="login"> Přihlásit se </button> </Link>
                    <Link href="/forms/auth/sign-up" className="links_header"> <button id="signup" > Zaregistrovat se </button> </Link>
                </Show>
                <Show when={'signed-in'}>
                    <Link href="/account" id="account" className="links_header"> Účet </Link>
                    <SignOutButton>
                        <button id="logout" className="links_header"> Odhlásit se </button>
                    </SignOutButton>
                </Show>
            </nav>
        </header>
    )
}