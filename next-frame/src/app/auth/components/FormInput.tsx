import { HTMLInputTypeAttribute } from "react";
import '../../styles/forms.css'

export function FormInputBox({label, type, id, required, value}: {label: string|[string,string], type: HTMLInputTypeAttribute, id: string, required: boolean, value: any}) {
    
    return (
        <div className="form-group">
            <label > { label } { required? ( <a><b> * </b></a> ) : ( null ) } </label> {/* if required => add '*', else => add nothing */}
            <input type={type} id={id} name={id} required={required} onChange={ e => value = e.target.value }/>
        </div>
    )
}