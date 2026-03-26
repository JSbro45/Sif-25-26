import '../../styles/eventview.css'
import { EventProps } from '../../../lib/map-types';
import { useState } from 'react';



export default function EventView({events, onClose}: {events: EventProps[], onClose: () => void}) {
   console.log('EventView received event:', event)
   const cardCount = events.length
   const [cardNumber, setCardNuber] = useState<number>(0)
    return (
        <section className="evt-view">
         <section style={{display:'flex'}}>
            <div className='cards' style={{display:'flex'}}>
               {
                  events.map( (evt, k) => 
                     <button className='evt-card' key={k} onClick={()=> setCardNuber(k)}>
                        {'akce '+(k+1)}
                     </button>
                  )
               }
            </div>
            <button className='x-btn' onClick={onClose}>
               <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="x-svg"
               >
               <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
         </section>
            <div className="evt-text">
                <h1 className='nazev-koncertu'> {events[0].name} </h1>
                <div className="evt-img-container">
                    <img src="path/to/image.jpg" alt="Koncert_Foto"/>
                </div>
                <p className="meta">Pořadatel: <a href='' className='meta-link'>Pořadatel</a></p>               
            <div className="event-info-cont">
             <h3 className='zakl-info'>Základní info:</h3>
             
             <div className="event-info">
                <p><img src="/icons/global.png" alt='odkaz' height={20} width={20} className='evt-icons'></img> Odkaz na interpreta</p>
             </div>
             <div className="event-info">
                <p><img src="/icons/quaver.png" alt='quaver' height={20} width={20} className='evt-icons'></img> <i>{events[0].genres.join(', ')}</i></p>
             </div>
             <div className="event-info">
                <p><img src="/icons/calendar.png" alt='calendar_icon' height={20} width={20} className='evt-icons'></img> {events[0].date_time.toString()} </p>
             </div>
             <div className="event-info">
                <p><img src="/icons/money.png" alt='money' height={20} width={20} className='evt-icons'></img>Vstupné</p>
             </div>
             <div className="event-info">
                <p><img src="/icons/tickets_web.png" alt='money' height={20} width={20} className='evt-icons'></img>Web pro koupi vstupenek</p>
             </div>
             <div className="event-info">
                <p><img src="/icons/pin_name.png" alt='money' height={20} width={20} className='evt-icons'></img>Název místa konání</p>
             </div>
             <div className="event-info">
                <p><img src="/icons/pin.png" alt='pin_mista' height={20} width={20} className='evt-icons'></img>Adresa místa konání</p>
             </div>
             <div className="event-info">
                <p><img src="/icons/pin_web.png" alt='money' height={20} width={20} className='evt-icons'></img>Web místa konání</p>
             </div>
            </div>
               <p className='line-break2'></p>
               <p className='meta2'> Podrobnější údaje naleznete zde: 
               <button className='meta2-btn'>Zjistit více</button>
               </p>
            </div>
    </section>
    )
}

// <a href="https://www.flaticon.com/free-icons/location" title="location icons">Location icons created by kmg design - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/pencil" title="pencil icons">Pencil icons created by Pixel perfect - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/money" title="money icons">Money icons created by kosonicon - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/credential" title="credential icons">Credential icons created by meaicon - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/global" title="global icons">Global icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/global" title="global icons">Global icons created by Vectors Tank - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/song" title="song icons">Song icons created by Freepik - Flaticon</a>
