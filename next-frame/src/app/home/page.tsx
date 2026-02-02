//import { useState } from 'react'
import Header from "./components/Header";
import MapModule from '../map/components/MapModule';
import '../styles/home.css'
import PageWrapper from "./components/PageWrapper";


export default function HomePage() {
    return (
        <PageWrapper> 
            <main>
                <div>
                    <h1>LocalFest</h1>
                    <section className="page-section">
                        <p>
                            Máte volný víkend a rádi byste zašli poznávat nové hudební skupiny a žánry? Těšíte se na koncert svého oblíbeného interpreta, ale nevíte žádné bližší informace? 
                            Nebo jste snad nadějná talentovaná kapela, která hledá příležitost zazářit a předávat svou hudbu svým fanouškům?
                            <br /> Tak to jste tady správně!
                            <br />LocalFest je webová aplikace, která vám pomůže najít koncerty a hudební akce v celé ČR rychle a přehledně, pomocí mapy. 
                            Na mapě jsou označené jednotlivé body představující místa konání koncertů a akcí, kdy po rozkliknutí se vám oběví bližší informace. 
                        </p>
                    </section>
                    <section className="page-section">
                        <p>
                            Prostřednictvím ikonek v levém horním rohu můžete vyhledávat konkrétní název akce, interpreta nebo místa a určit si i časový rozsah, ve kterém chcete akce vyhledávat.
                            <br />Pokud chcete svůj koncert zařadit do naší databáze, můžete tak učinit prostřednictvím vytvoření účtu pro pořadatele. 
                            Stačí kliknout na tlačítko "Zaregistrovat se" v pravém horním rohu.
                            <br />Pro jakékoliv dotazy či připomínky nás neváhejte kontaktovat prostřednictvím sekce "O nás". Rádi vám pomůžeme!
                            <br />Klikněte na mapu níže a začněte objevovat hudební akce ve vašem okolí!
                        </p>
                    </section>
                </div> 
                <MapModule map_type='embed' />    
                {/* zařiď ať je mapa napravo */}       
            </main>
        </PageWrapper>
    )
}