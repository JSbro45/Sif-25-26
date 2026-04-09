import React, { HTMLInputTypeAttribute } from "react";
//import { SubmitButton } from "./SubmitButton";
import '../../styles/forms.css'

export class FormInputObject {
    constructor(
        public label: string | [string, string],
        public type: HTMLInputTypeAttribute,
        public id: string,
        public required: boolean,
        public func: (() => void) | undefined = undefined,
        public ref: React.RefObject<HTMLInputElement | null> | undefined = undefined
    ) {}
}


const InputBox = ({ inputObj }: { inputObj: FormInputObject }) => (
    <div className="form-input-box">
        {
            inputObj.type != 'button'
                ? <label htmlFor={inputObj.id}> 
                    { inputObj.label } { inputObj.required? ( <b> * </b> ) : ( '' ) } 
                </label>
                : null
        } 
        <input 
            id={ inputObj.id } 
            name={ inputObj.id } 
            type={ inputObj.type } 
            required={ inputObj.required }  
            onClick={() =>  inputObj.func ? inputObj.func(): null}
        />
            {/*onChange={ e => inputObj.ref ? inputObj.ref.current = e.target : null } */}
    </div>
);

export const FormComponent = ({formMapper, submitCaption, execute}: {
        formMapper: (FormInputObject | FormInputObject[])[], 
        submitCaption: string,
        execute: (param: FormData) => void | Promise<void>
    }) => (
    <form
        action={(formData:FormData) => {
            if (formData && formData) {
                execute(formData);
            }
        }}
        className="form-container"
    >
        {formMapper.map((obj, key) => (
            Array.isArray(obj) ? (
                <div key={key} className="form-input-group">
                    {
                        obj.map((item, i) => (
                            <InputBox key={`${key}-${i}`} inputObj={item} />
                        ))
                    }
                </div>
            ) : (
                <InputBox key={key} inputObj={obj} />
            )
        ))}
        <button type="submit"> {submitCaption} </button>
    </form>
    );
