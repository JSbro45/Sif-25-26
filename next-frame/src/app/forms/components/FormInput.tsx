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
            value={inputObj.type === 'button' ? inputObj.label : ''} 
            onClick={() =>  inputObj.func ? inputObj.func(): null}
        />
            {/*onChange={ e => inputObj.ref ? inputObj.ref.current = e.target : null } */}
    </div>
);

export const FormComponent = ({formMapper, refObject, execute}: {
        formMapper: (FormInputObject | FormInputObject[])[], 
        refObject: React.RefObject<HTMLFormElement | null>, 
        execute: (param: object[]) => void | Promise<void>
    }) => (
    <form
        ref={refObject}
        action={(formData:FormData) => {
            if (refObject && refObject.current) {
                const final = [] as { [key: string]: string | null }[]
                for (const obj of formMapper.flat()) {
                    const input = refObject.current.elements.namedItem(obj.id) as HTMLInputElement | null;
                    final.push({ [obj.id]: input ? input.value : null });
                }
                execute(final)
        }}}
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
        <button type="submit"> Přidat </button>
    </form>
    );
