'use client'

import { FormComponent, FormInputObject } from "../../components/FormInput"
import { useRef } from "react"

 
export default function LogInForm() {
    const mapper = [
        new FormInputObject("Email:", "email", "email", true),
        new FormInputObject("Heslo:", "password", "password", true)
    ]
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

