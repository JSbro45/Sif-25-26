
export default function UserAccountInfo() {
    return (
       <div className="container">
        <section className="card profile-header" aria-labelledby="profile-name">
            <img className="avatar" src="insertpng" alt="Pfp uživatele" />
            <div>
                <h1 id="profile-name" className="name">Název/Jméno</h1>
                <div className="actions">
                    <a className="btn" href="/account/edit">Editovat</a>
                    <a className="btn secondary" href="/logout">Odhlásit se</a>
                </div>
            </div>
        </section>

        <div className="grid">
            <div>
                <section className="card">
                    <h2 style={{marginTop:0}}>O pořadateli</h2>
                    <p className="bio">O pořadateli....</p>
                </section>
            </div>
             <div>
                <section className="card">
                    <h2 style={{marginTop:0}}>Změnit údaje</h2>
                    <button type="submit" className="btn" aria-pressed="true" onClick={() => window.location.href='user_changing_signup.html'}>Změnit zde</button>
                </section>
            </div>
        </div>
    </div>
    )
}