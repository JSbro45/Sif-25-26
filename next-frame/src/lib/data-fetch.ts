import { LatLngTuple } from 'leaflet';
import { prisma } from './dbclient';
import { AddressProps, EventProps, MarkerProps, FilterProps} from './map-types';
import { ProfileProps } from './user-types';
import { Event, Address, HostUserProfile } from './generated/prisma/client';


export async function getPins({ dateRange : { start, end }, genre} : FilterProps) {
    const events = await prisma.event.findMany({
        where: {
            AND: [
                {
                    date_time: {
                        gte: start,
                        lte: end
                    }
                },
                genre?.length?({
                    genres: {
                        hasSome: genre
                    }
                }): {}
            ]
        }
    }) as EventProps[];

    const addressIds = events.map(event => event.addressId).filter(id => id !== undefined);
    const addresses = await prisma.address.findMany({ where: { id: { in: addressIds }}}) 
    const pins = addresses as AddressProps []
    pins.map((pin, k) => pin.coordinates = [addresses[k].lat, addresses[k].lng] as LatLngTuple );

    return [addresses, events] as [AddressProps[], EventProps[]];
}


export async function newAddress(props: AddressProps){
    let address : Promise<Address> | Address
    const data =  {
        region : props.region,
        municipality : props.municipality,
        district : props.district,
        street : props.street,
        houseNumber : props.houseNumber,
        postalCode: props.postalCode,
        lat : props.coordinates[0],
        lng : props.coordinates[1]
    } 
    address = await prisma.address.findFirst({ where: data })
    if (!address) {
        address = await prisma.address.create({ data: data })
    }
    return address as Address
}


export async function newHostUser(props: ProfileProps | null, clerkId: string | undefined) {
    if (!clerkId) {
        console.error('Clerk ID is required to create a new host user profile.')
        return null;
    }
    const user = await prisma.hostUserProfile.create(
        {
            data:{
                clerkId: clerkId,
                firstName: props?.firstName || '',
                lastName: props?.lastName || '',
                email: props?.email || '',
                orgName: '',
                webSite: '',
            }
        }
    ) as HostUserProfile;
    return user as HostUserProfile;
}

export async function findUserByClerkId(clerkId: string | undefined) {
    let user = await prisma.hostUserProfile.findFirst({
        where: { clerkId: clerkId }
    }) as HostUserProfile | null;
    if (!user) console.error('requested user not found', clerkId)
    return user;
}


export async function setEvent(evt_data: EventProps) {
    const event = await prisma.event.create({
        data: {
            name:        evt_data.name,
            hostUserId:  evt_data.hostUserId,
            date_time:   evt_data.date_time,
            genres:      evt_data.genres, 
            photos:      evt_data.photos,
            addressId:   evt_data.addressId
        }
    }) as Event;
    return event;
}



import { geoCode } from "@/src/lib/geocode";
import safeFetch from "@/src/lib/safe-fetch";

export async function geoFunction(formData: FormData) {
  return safeFetch(() => geoCode(formData), []);
}

export async function submitFunction(formData: FormData, selectedAddress: any) {
  try {
    if (!selectedAddress) return null;
    const address = await newAddress(selectedAddress);
    const eventData = {
      name: formData.get('evt-name') as string,
      description: formData.get('evt-desc') as string,
      date_time: formData.get('evt-datetime') as string,
      genres: formData.get('evt-genre')?.toString().split(', ') || [],
      photos: [],
      hostUserId: "",
      addressId: address.id
    };
    const event = await setEvent(eventData);
    return event;
  } catch (error) {
    console.error('Event submission failed:', error);
    return null;
  }
}
