
export default function PlusBarPU() {
    return (
        <div className="dropdown">
        <button className="round-btn" id="ddToggle" aria-expanded="false" aria-controls="ddMenu" title="Open menu" style={{fontSize: "xx-large", color:"#d4ecff"}}>
            +
        </button>

        <div className="menu" id="ddMenu" role="menu" aria-labelledby="ddToggle">
            <a role="menuitem">Přidávat piny můžete jen jako pořadatel, chcete se zaregistrovat? <button type='submit'><a href='signin_form'>Zaregistrovat se</a></button></a>
            <a href="project_info_o_nas.html" role="menuitem">O nás</a>
        </div>
    </div>
    )
}