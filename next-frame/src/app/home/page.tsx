//import { useState } from 'react'
import Header from "./components/Header";
import MapModule from '../map/components/MapModule';
import '../styles/home.css'
import PageWrapper from "./components/PageWrapper";

export default function HomePage() {
    return (
        <PageWrapper> 
            <div className="home-container">
                        <h1 className="subtitle">LocalFest - pro kapely i pro hudební nadšence</h1>
                        <section className="page-section">
                            <p className="text1">
                            Máte volný víkend a rádi byste zašli poznávat nové hudební skupiny a žánry? Těšíte se na koncert svého oblíbeného interpreta, ale nevíte žádné bližší informace? 
                            Nebo jste snad nadějná talentovaná kapela, která hledá příležitost zazářit a předávat svou hudbu svým fanouškům?
                            <p style={{ fontSize: '22px', fontWeight: 'bold' }}>Tak to jste tady správně!</p>
                            <ul>
                                <li>LocalFest je webová aplikace, která vám pomůže najít koncerty a hudební akce v celé ČR rychle a přehledně, pomocí mapy. </li>
                                <li>Na mapě jsou označené jednotlivé body představující místa konání koncertů a akcí, kdy po rozkliknutí se vám oběví bližší informace. </li>
                            </ul>
                            </p>
                        </section>
                <div className="map-text">
                        <section className="page-section">
                            <p className="text2">
                            <p style={{fontSize: 20 }}> Klikněte na mapu níže a začněte objevovat hudební akce <br></br> ve vašem okolí!
                                <br></br>➜
                            </p>
                            <ul style={{padding: '10px 0px 0px 20px'}}>

                                <li style={{paddingBottom: '10px'}}>Prostřednictvím ikonek v levém horním rohu můžete vyhledávat konkrétní název akce, interpreta nebo místa a určit si i časový rozsah, ve kterém chcete akce vyhledávat.</li>
                                <li>Pokud chcete svůj koncert zařadit do naší databáze, můžete tak učinit prostřednictvím vytvoření účtu pro pořadatele. 
                                Stačí kliknout na tlačítko "Zaregistrovat se" v pravém horním rohu.</li>
                            </ul>
                            <br />Pro jakékoliv dotazy či připomínky nás neváhejte kontaktovat prostřednictvím <br />sekce "O nás". Rádi vám pomůžeme!
                            </p>
                        </section>
                    <div className="map-contain-home">
                        <MapModule map_type='embed' markers={[]} />    
                        {/* zařiď ať je mapa napravo */}   
                    </div>
                </div>    
            </div>
        </PageWrapper>
    )
}