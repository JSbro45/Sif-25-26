import SignUpForm from "./Signup";
import LogInForm from "./Login";
import AddEventForm from "./AddEvent";
import '../../styles/forms.css'


const forms = {
        "signup": <SignUpForm />,
        "login": <LogInForm />,
        "addevent": <AddEventForm />
    }
type FormType = keyof typeof forms;

export default function Form({type}: {type: FormType}) {
    return (
        <main>
             { forms[type] } 
        </main>
    )
}

