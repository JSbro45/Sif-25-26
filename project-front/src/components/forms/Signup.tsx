import { FormInputBox } from "./FormInput"


export default function SignUpForm() {
    return (
        <section className="signin-container">
            <h1>Zaregistrovat se <br/> jako pořadatel</h1>
            <form>
                <FormInputBox  label="Jméno/Název:" type="username" id="username" required={true} />
                <FormInputBox  label="Email:" type="email" id="email" required={true} />
                <FormInputBox  label="Tel. číslo:" type="tel" id="phone-number" required={true} />
                <FormInputBox  label="Heslo:" type="password" id="password" required={true} /> {/*minlength: 8 characters*/}
                <FormInputBox  label="Odkaz na stránky/sociální sítě::" type="text" id="socials" required={false} />
                <button type="submit">Zaregistrovat se</button>
            </form>
        </section>
    )
}

