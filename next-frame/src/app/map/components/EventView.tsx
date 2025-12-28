
interface props {
    eventName: string;
    eventImage: string;
    eventOrganizer: string;
    eventLink: string;
    eventGenre: string;
    eventDate: string;
    eventTime: string;
    eventPrice: string;
    eventTicketLink: string;
    eventLocationName: string;
    eventLocationAddress: string;
    eventLocationWebsite: string;
}

export default function EventView() {
    return (
        <section className="wrapper">
            <h1>Název koncertu: </h1>
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
    </section>
    )
}