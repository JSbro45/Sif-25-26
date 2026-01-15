import { HTMLInputTypeAttribute } from "react";
import '../../styles/forms.css'

export function FormInputBox({label, type, id, required, value}: {label: string, type: HTMLInputTypeAttribute, id: string, required: boolean, value?: HTMLInputTypeAttribute}) {
    return (
        <div className="form-group">
            <label > { label } { required? ( <a><b> * </b></a> ) : ( null ) } </label> {/* if required => add '*', else => add nothing */}
            <input type={type} id={id} name={id} required={required} value={value} />
        </div>
    )
}