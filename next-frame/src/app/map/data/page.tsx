import { getAllPins } from "@/src/lib/data-fetch"
import safeFetch from "@/src/lib/safe-fetch"
import { MarkerProps } from "@/src/lib/map-types"


export default async function Page() {
    const initialMarkers = await safeFetch<MarkerProps[]>(
        () => getAllPins(),
        []
    )
    console.log('Initial markers:', initialMarkers)
    return (
        <>
        <h1>Map Data Page</h1>
        <pre style={{ color: 'white' }}>{JSON.stringify(initialMarkers, null, 2)}</pre>
        </>
    )
}