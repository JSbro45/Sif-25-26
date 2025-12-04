
export default function PlusBarPU() {
    return (
        <div className="dropdown">
        <button className="round-btn" id="ddToggle" title="Open menu" style={{fontSize: "xx-large", color:"#d4ecff"}}>
            +
        </button>

        <div className="menu" id="ddMenu" role="menu">
            <a href="add_pin_form.html" role="menuitem">Přidat</a>
            <a href="user_account_info.html" role="menuitem">Váš účet</a>
            <a href="project_info_o_nas.html" role="menuitem">O nás</a>
        </div>
    </div>
    )
}
