'use client'
import '../../styles/dateicon.css'

export default function DateIcon() {
    return (
        <div className="date-container">
            <form className='text-date'>
                <label className='date-label' htmlFor="date-select"><b>Datum:</b></label>
                <input className="date-input" type="date" id="date-select" name="date-select" onChange={(e) => alert(typeof e.target.value)}/>
            </form>
        </div>
    )
}