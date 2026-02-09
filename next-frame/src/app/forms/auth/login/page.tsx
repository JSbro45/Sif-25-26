import { FormInputBox } from "../../components/FormInput"
import '../../styles/forms.css'

export default function LogInForm() {
    return (
        <section className="login-container">
            <h1>Přihlásit se <br/> jako pořadatel</h1>
            <form>
                <FormInputBox label="Email:" type="email" id="email" required={true} />
                <FormInputBox label="Heslo:" type="password" id="password" required={true} />
                <button type="submit">Přihlásit se</button>
            </form>
        </section>
    )
}

