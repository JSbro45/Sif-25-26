import '../../styles/eventview.css'

interface props {
    eventName: string;
    onClose: () => void;
}

interface un_ness {
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

export default function EventView(props: props) {
    return (
        <section className="evt-view">
            <button
                className='x-btn'
                onClick={props.onClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="x-svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="evt-text">
                <h1 className='nazev-koncertu'>{props.eventName}</h1>
                <div className="evt-img-container">
                    <img src="path/to/image.jpg" alt="Koncert_Foto"/>
                </div>
                <p className="meta">Pořadatel: <a href='' className='meta-link'>Pořadatel</a></p>               
            <div className="event-info-cont">
             <h3 className='zakl-info'>Základní údaje:</h3>
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
            </div>
               <p className='meta2'> Podrobnější údaje naleznete zde: 
               <button className='meta2-btn'>Zjistit více</button>
               </p>
            </div>
    </section>
    )
}