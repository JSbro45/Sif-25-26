//import { useState } from 'react'
import Header  from "./Header";
import Map from '../map/Map'
import Footer from "./Footer";


export default function HomePage() {
    return (
        <><main>
            <Header />
            <div>
                <h1>LocalFest</h1>
                <p>Máte volný víkend a rádi byste zašli poznávat nové hudební skupiny a žánry? Těšíte se na koncert svého oblíbeného interpreta, ale nevíte žádné bližší informace? Nebo jste snad nadějná talentovaná kapela, která hledá příležitost zazářit a předávat svou hudbu svým fanouškům?</p>
                <p>Tak to jste tady správně!</p>
                <p>LocalFest je webová aplikace, která vám pomůže najít koncerty a hudební akce v celé ČR rychle a přehledně, pomocí mapy. Na mapě jsou označené jednotlivé body představující místa konání koncertů a akcí, kdy po rozkliknutí se vám oběví bližší informace. Prostřednictvím ikonek v levém horním rohu můžete vyhledávat konkrétní název akce, interpreta nebo místa a určit si i časový rozsah, ve kterém chcete akce vyhledávat.</p>
                <p>Pokud chcete svůj koncert zařadit do naší databáze, můžete tak učinit prostřednictvím vytvoření účtu pro pořadatele. Stačí kliknout na tlačítko "Zaregistrovat se" v pravém horním rohu.</p>
                <p>Pro jakékoliv dotazy či připomínky nás neváhejte kontaktovat prostřednictvím sekce "O nás". Rádi vám pomůžeme!</p>
                <p>Klikněte na mapu níže a začněte objevovat hudební akce ve vašem okolí!</p>
            </div>
            <Map />
        </main><Footer /></>
    )
}