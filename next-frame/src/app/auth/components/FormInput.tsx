import { HTMLInputTypeAttribute } from "react";
import '../../styles/forms.css'

export function FormInputBox({label, type, id, required}: {label: string, type: HTMLInputTypeAttribute, id: string, required: boolean}) {
    return (
        <div className="form-group">
            <label > { label } { required? ( <a><b> * </b></a> ) : ( null ) } </label> {/* if required => add '*', else => add nothing */}
            <input type={type} id={id} name={id} required={required}/>
        </div>
    )
}