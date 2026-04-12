import { HostUserProfile } from "./generated/prisma/client"


export type ProfileProps = Pick<HostUserProfile, 'firstName' | 'lastName' | 'email' >



