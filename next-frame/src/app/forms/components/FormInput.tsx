import React, { HTMLInputTypeAttribute } from "react";
//import { SubmitButton } from "./SubmitButton";
import '../../styles/forms.css'

export class FormInputObject {
    constructor(
        public label: string | [string, string],
        public type: HTMLInputTypeAttribute,
        public id: string,
        public required: boolean,
        public value: React.RefObject<HTMLInputElement | null> | undefined = undefined
    ) {}
}


const InputBox = ({ inputObject }: { inputObject: FormInputObject }) => (
    <div className="form-input-box">
        <label> { inputObject.label } { inputObject.required? ( <a><b> * </b></a> ) : ( null ) } </label> 
        <input 
            type={ inputObject.type } 
            id={ inputObject.id } 
            name={ inputObject.id } 
            required={ inputObject.required } 
            onChange={ e => inputObject.value ? inputObject.value.current = e.target : null }
        />
    </div>
);

export const FormComponent = ({formMapper, refObject, execute}: {
        formMapper: FormInputObject[], 
        refObject: React.RefObject<HTMLFormElement | null>, 
        execute: (param: object[]) => void | Promise<void>
    }) => (
    <form
        ref={refObject}
        onSubmit={e => {
            if (refObject && refObject.current) {
                const final = [] as { [key: string]: string | null }[]
                for (const obj of formMapper) {
                    const input = refObject.current.elements.namedItem(obj.id) as HTMLInputElement | null;
                    final.push({ [obj.id]: input ? input.value : null });
                }
                execute(final)
        }}}
        className="form-container"
    >
        {formMapper.map((obj, index) => (
            <InputBox key={index} inputObject={obj} />
        ))}
        <button type="submit"> Přidat </button>
    </form>
);

