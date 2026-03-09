'use client'

import { FormComponent, FormInputObject as FormObject } from "../../components/FormInput"
import { useRef } from "react"
import '../../../styles/forms.css'

 
export default function LogInForm() {
    const mapper = [
        new FormObject("Email:", "email", "email", true),
        new FormObject("Heslo:", "password", "password", true)
    ]
    mapper.forEach( (obj) => {
        obj.value = useRef<HTMLInputElement | null>(null)
    })
    const formRef = useRef<HTMLFormElement | null>(null)

    return (
        <section className="login-container">
            <h1>Přihlaste se </h1> 
            <h2> jako pořadatel </h2>
            <FormComponent formMapper={mapper} refObject={formRef} execute={(obj) => {
                    console.log(obj);
            }}/>
        </section>
    )
}

