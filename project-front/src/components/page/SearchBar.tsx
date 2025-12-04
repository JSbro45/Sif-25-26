import React from "react"

export default function SearchBar() {
    return (
        <form className="search-container" role="search" action="#" method="get" >
            <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 21l-4.35-4.35" stroke="#05549f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="11" cy="11" r="6" stroke="#05549f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input className="search-input" type="search" name="q"  aria-label="Search"></input>
            <button className="search-button" type="submit" aria-label="Submit search">
                Hledat
            </button>
        </form>
        )
    }