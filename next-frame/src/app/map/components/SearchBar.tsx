import '../../styles/searchbarmap.css'

export default function SearchBar({ ref, onSubmit, isLoading }: { ref?: React.Ref<HTMLInputElement>, onSubmit?: () => void, isLoading?: boolean }) {
    return (
        <form className="search-container" role="search" action="#" method="get" >
            <svg className="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 21l-4.35-4.35" stroke="#0f8100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="11" cy="11" r="6" stroke="#0f8100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input className="search-input" type="search" name="q"  placeholder='Hledej klíčové slovo...'></input>
            <button className="search-button" type="submit" aria-label="Submit search">
                Hledat
            </button>
        </form>
    )
}
