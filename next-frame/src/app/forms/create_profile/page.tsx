import { newHostUser } from "@/src/lib/data-fetch"


interface SearchParams {
    clerkId: string | undefined
    orgName: string | undefined
    website: string | undefined
    baseAddress: string | undefined
}

export default function CreateProfile({ searchParams }: { searchParams: SearchParams }) {
    const 
    const handleSubmit = async (formData: FormData) => {
        const { clerkId, orgName, website, baseAddress } = searchParams;

        // Call the newHostUser function with the form data
        const result = await newHostUser({
            
            clerkId,
            orgName,
            website,
            baseAddress,
        });

        if (result) {
            // Handle successful profile creation
        } else {
            // Handle errors
        }
    };
    return (
        <div id='loading-screen' style={{backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Image src="/logo-2.svg" alt="redirect logo" width={size} height={size} onLoad={() => router.push('/account')} />
        </div>
    )       
}