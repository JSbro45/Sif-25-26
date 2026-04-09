'use client';

import { MarkerProps } from '@/src/lib/map-types';
import MapModule from '../map/components/map/MapModule';
import '../styles/home.css'
import PageWrapper from "./components/PageWrapper";
import { useRouter } from 'next/navigation';


export default function HomePage() {
    const router = useRouter();
    return (
        <PageWrapper> 
            <div className="home-container">
                        <h1 className="subtitle">LocalFest - pro kapely i pro hudební nadšence</h1>
                        <section className="page-section">
                            <div className="text1">
                                <p> 
                                Máte volný víkend a rádi byste zašli poznávat nové hudební skupiny a žánry? Těšíte se na koncert svého oblíbeného interpreta, ale nevíte žádné bližší informace? 
                                Nebo jste snad nadějná talentovaná kapela, která hledá příležitost zazářit a předávat svou hudbu svým fanouškům?
                                </p>
                                <p style={{ fontSize: '22px', fontWeight: 'bold' }}>Tak to jste tady správně!</p>
                                <ul>
                                    <li>LocalFest je webová aplikace, která vám pomůže najít koncerty a hudební akce v celé ČR rychle a přehledně, pomocí mapy. </li>
                                    <li>Na mapě jsou označené jednotlivé body představující místa konání koncertů a akcí, kdy po rozkliknutí se vám objeví bližší informace. </li>
                                </ul>
                            </div>
                        </section>
                    <div className="map-text">
                        <section className="page-section">
                            <div className="text2">
                                <p style={{fontSize: 20 }}> 
                                    Klikněte na mapu a začněte <br /> objevovat hudební akce <br /> ve vašem okolí!
                                    <br/> 
                                    ➜
                                </p>
                                <ul style={{padding: '10px 0px 0px 20px'}}>
                                    <li style={{paddingBottom: '10px'}}>Prostřednictvím ikonek v levém horním rohu můžete vyhledávat konkrétní název akce, interpreta nebo místa a určit si i časový rozsah, ve kterém chcete akce vyhledávat.</li>
                                    <li>Pokud chcete svůj koncert zařadit do naší databáze, můžete tak učinit prostřednictvím vytvoření účtu pro pořadatele. 
                                    Stačí kliknout na tlačítko "Zaregistrovat se" na domovské stránce.</li>
                                </ul>
                                <p>
                                    Pro jakékoliv dotazy či připomínky nás neváhejte <a href="/home/about" id="kontaktovat"> kontaktovat </a>!
                                </p>
                            </div>
                        </section>
                    <div className="home-map-container" onDoubleClick={() => router.push('/map')}>

                        <MapModule map_type='embed' markers={new MarkerProps([],[])} onMarkerClick={() => router.push('/map')} />

                    </div>
            </div>   
            </div>   
        </PageWrapper>
    )
}