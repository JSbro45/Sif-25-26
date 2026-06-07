'use server'

import { HostUserProfile } from "@/src/lib/generated/prisma/client";
import { ProfileProps } from "@/src/lib/user-types";
import { SignOutButton } from "@clerk/nextjs";


export default async function Profile({user}:{user: HostUserProfile }) {
    return (
            <div className="container">
                <section className="profile-header">
                    {/* <img className="avatar" src="insertpng" alt="Pfp uživatele" /> */}
                    <div>
                        <h1 id="profile-name"> {  [user.firstName, user.lastName].join(' ') } </h1>
                        <h2 id="org-name"> {user.orgName || ''} </h2>
                        <h2 id="email"> {user.email || ''} </h2>
                        <h2 id="web"> {user.webSite || ''} </h2>
                        <h2 id="base-address"> {user.baseAddressId || ''} </h2>

                    </div>
                </section>
                <div>
                    <div className="profile-actions">
                        <SignOutButton>
                            <button id="sign-out-btn"> Odhlásit se </button>
                        </SignOutButton>
                        <button id="edit-profile-btn"> Změnit údaje </button>
                    </div>
                </div>
            </div>
    )
}