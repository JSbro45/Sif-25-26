import { HostUserProfile } from "@/src/lib/generated/prisma/client";
import { ProfileProps } from "@/src/lib/user-types";
import { SignOutButton } from "@clerk/nextjs";


export default function UserAccountInfo({user}:{user: HostUserProfile | null}) {
    if (!user) {
        return (
            <div>
                <h2 style={{color:'red'}}>Uživatel nebyl nalezen</h2>
                <h3> Prosím, zkontrolujte své přihlašovací údaje nebo se obraťte na podporu. 
                    <br/> 
                    <a href="/home/about"> kontaktujte podporu </a>
                </h3>
            </div>
        )
    }

    return (
       <div className="container">
        <section className="profile-header">
            {/* <img className="avatar" src="insertpng" alt="Pfp uživatele" /> */}
                <div>
                    <h1 id="profile-name"> {  [user.firstName, user.lastName].join(' ') } </h1>
                    <h2 id="org-name"> {user.orgName} </h2>
                </div>
                
                <div className="actions">
                    <a className="btn" href="/account/edit"> <button> Editovat </button> </a>
                    <SignOutButton>
                        <button> Odhlásit se </button>
                    </SignOutButton>
                </div>
        </section>


        <section>
            <h2 style={{marginTop:0}}>O pořadateli</h2>
            <p className="bio">O pořadateli....</p>
        </section>
        <div className="grid">
            <div>
                <section className="card">
                </section>
            </div>
            <div>
                <section className="card">
                    <h2 style={{marginTop:0}}>Změnit údaje</h2>
                    <button type="submit" className="btn" >Změnit zde</button>
                </section>
            </div>
        </div>
    </div>
    )
}