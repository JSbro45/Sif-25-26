import React, { HTMLInputTypeAttribute } from "react";
import '../../styles/forms.css'

export function FormInputBox({label, type, id, required, value}: {
    label: string|[string,string],
    type: HTMLInputTypeAttribute, 
    id: string, required: boolean, 
    value: React.RefObject<HTMLInputElement | null> 
}) {

    return (
        <div className="form-input-box">
            <label > { label } { required? ( <a><b> * </b></a> ) : ( null ) } </label> {/* if required => add '*', else => add nothing */}
            <input type={type} id={id} name={id} required={required} onChange={ e => value && (value.current!.value = e.target.value) }/>
        </div>
    )
}
export const inputBoxType =  typeof FormInputBox.arguments

