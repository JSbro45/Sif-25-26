import { HostUserProfile } from "./generated/prisma/client"


export type HostSignUpProps = Pick<HostUserProfile, 'firstName'| 'lastName' | 'email' | 'password' >
