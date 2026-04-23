import { newHostUser } from "@/src/lib/data-fetch"
import { HostUserProfile } from "@/src/lib/generated/prisma/client"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"


interface SearchParams {
    clerkId: string | undefined
    orgName: string | undefined
    website: string | undefined
    baseAddress: string | undefined
}

export default async function CreateProfile({ 
    searchParams 
}: { 
    searchParams: Promise<SearchParams>  // Promise in Next.js 15+
}) {
    const { clerkId, orgName, website, baseAddress } = await searchParams

    const clerkUser = await currentUser()

    if (clerkUser) {
        const hostUser = newHostUser(
            {
                firstName: clerkUser.firstName,
                lastName: clerkUser.lastName,
                email: clerkUser.emailAddresses
            }, 
            clerkId ?? clerkUser.id   // use param or fall back to session
        ) as HostUserProfile | null

        if (hostUser) {
            redirect('/account')
        } else {
            redirect('/forms/auth/sign-up')
        }
    }

    return <p></p>
}
