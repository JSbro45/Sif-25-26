import { prisma } from "@/src/lib/dbclient"
import { EventProps } from "@/src/lib/map-types"
import EventCard from "./Card"



export default async function EventSelection({hostId}:{hostId: number}) {
    const events = await prisma.event.findMany( { where:{ hostUserId: hostId} } ) as EventProps []
    return (
        <div className="container">
            <div className="event-cards">
                {
                    events.map((evt: EventProps, k : number) => (
                        <div className="event-card" key={k}>
                            <EventCard evt={evt}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}