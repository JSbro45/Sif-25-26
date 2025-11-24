
export function FormInputBox({label, type, id, required}: {label: string, type: string, id: string, required: boolean}) {
    return (
        <div className="form-group">
            <label >{label}{ required? (<a ><b>*</b></a>) : (null) }</label>
            <input type={type} id={id} name={id} required={required}/>
        </div>
    )
}