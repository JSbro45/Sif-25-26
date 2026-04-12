'use server'

import {UserAuthComponent, ProfileUI} from "./components/UserAccount_";
import Profile from "./components/Profile";
import EventCards from "../events/components/EventCards";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { findUserByClerkId, newHostUser } from "@/src/lib/data-fetch";
import { clerkClient } from "@clerk/nextjs/server";



async function getOrCreateUser(clerkId: string) {
  let user = await findUserByClerkId(clerkId);

  if (!user) {
    const clerkUser = await (await clerkClient()).users.getUser(clerkId);

    user = await newHostUser({
      firstName: clerkUser.firstName as string,
      lastName: clerkUser.lastName as string,
      email: clerkUser.emailAddresses[0].emailAddress as string
    },
      clerkId,
    );
  }
  user = await findUserByClerkId(clerkId);

  return user;
}


export default async function AccountPage() {
    const { userId: clerkId } = await auth();

    if (!clerkId) redirect("/forms/auth/login");

    const user = await getOrCreateUser(clerkId);
    console.log('user profile', user)

    return (
    <div>
        <div>
            <Profile user={user} />
        </div>
        <EventCards hostId={user.id} />
    </div>
    )
}