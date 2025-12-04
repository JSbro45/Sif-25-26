
export default function EventView() {
    return (
        <div className="wrapper">
        <article className="text-container" role="region" aria-label="Event description">
            <h1>Název koncertu</h1>
            <img src="path/to/image.jpg" alt="Koncert_Foto" style={{maxWidth:"100%", height:"auto", marginBottom:"12px"}} />
            <p className="meta">Jméno pořadatele</p>
            <div className="event-info">
                <label htmlFor="text">Odkaz na interpreta:</label>
            </div>
             <div className="event-info">
                <label htmlFor="text">Žánr</label>
            </div>
             <div className="event-info">
                <label htmlFor="text">Datum konání:</label>
            </div>
             <div className="event-info">
                <label htmlFor="text">Čas konání:</label>
            </div>
            <div className="event-info">
                <label htmlFor="text">Vstupné:</label>
            </div>
            <div className="event-info">
                <label htmlFor="text">Web pro koupi vstupenek:</label>
            </div>
            <div className="event-info">
                <label htmlFor="text">Název místa konání:</label>
            </div>
            <div className="event-info">
                <label htmlFor="text">Adresa místa konání:</label>
            </div>
            <div className="event-info">
                <label htmlFor="text">Web místa konání:</label>
            </div>
        </article>
    </div>
    )
}