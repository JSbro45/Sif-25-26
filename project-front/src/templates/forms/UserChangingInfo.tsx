import { FormInputBox } from "./FormInput"


export default function UserChangingInfo() {
    return (
        <section className="user-changing-info-container">
           <h1>Změnit údaje</h1>
            <p>Napište své nové údaje níže a potvrďte změny:</p>
            <form>
                <FormInputBox  label="Email:" type="email" id="email" required={true} />
                <FormInputBox  label="Tel. číslo:" type="tel" id="phone-number" required={true} />
                <FormInputBox  label="Heslo:" type="password" id="password" required={true} /> {/*minlength: 8 characters*/}    
                <button type="submit">Potvrdit změny</button>
            </form>
        </section>
    )
}