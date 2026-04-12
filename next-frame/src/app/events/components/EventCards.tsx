import { prisma } from "@/src/lib/dbclient"
import { EventProps } from "@/src/lib/map-types"



export default async function EventCards({hostId}:{hostId: number}) {
    const events = await prisma.event.findMany( { where:{ hostUserId: hostId} } ) as EventProps []
    return (
        <div className="container">
            <div className="event-cards">
                {
                    events.map((evt: EventProps, k : number) => (
                        <div className="event-card" key={k}>
                            <img src={evt.photos[0]} alt="" />
                            <h2>{evt.name}</h2>
                            <p>{evt.description}</p>
                            <p>{evt.date_time.toLocaleDateString()}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}