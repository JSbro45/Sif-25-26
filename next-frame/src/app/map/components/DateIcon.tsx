'use client'
import '../../styles/dateicon.css'

export default function DateIcon() {
    return (
        <div className="date-container">
            <form className='date-form' >
                <input className="date-input" type="date" name="start-date" />
                <input className="date-input" type="date" name="end-date" />
            </form>
        </div>
    )
}