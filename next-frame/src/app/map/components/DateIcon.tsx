import '../../styles/dateicon.css'

export default function DateIcon() {
    return (
        <div className="date-container">
        <form>
            <label htmlFor="date-select"><b>Datum:</b></label>
            <input type="date" id="date-select" name="date-select" />
        </form>
    </div>
    )
}