'use client'

import { useAuth, useSignUp, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import "../../../../styles/forms.css"
import { newHostUser } from '@/src/lib/data-fetch'
import { FormComponent, FormInputObject } from '../../../components/FormInput'
import { useState } from 'react'
import { ProfileProps } from '@/src/lib/user-types'
import { EmailAddress } from '@clerk/nextjs/server'
import safeFetch from '@/src/lib/safe-fetch'






export default function Page() {
  const { signUp, errors, fetchStatus } = useSignUp()
  const { isSignedIn } = useAuth()
  const { user } = useUser()
  const [userData, setUserData] = useState<ProfileProps | null>(null)
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    /*const signUpMapper = [
      new FormInputObject('zadejte jméno', 'text', 'firstName', true),
      new FormInputObject('zadejte příjmení', 'text', 'lastName', true),
      new FormInputObject('zadejte zadejte emailovou adresu', 'email', 'email', true),
      new FormInputObject('zadejte heslo', 'password', 'password', true),
      new FormInputObject('potvrďte heslo', 'email', 'email', true)
    ]
    signUpMapper.map((object, key) =>  formData.get(object.id))
    */
    const data = { 
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
    } as ProfileProps
    const password = formData.get('password') as string
    const confirmPass = formData.get('confirm-pass') as string
    
    if (password && confirmPass && password !== confirmPass) {
      console.error('Passwords do not match')
    }
    
    setUserData(data)

    const { error } = await signUp.password({
      emailAddress: data.email,
      password: password,
      firstName: data.firstName,
      lastName: data.lastName
    })

    if (error) {
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(error, null, 2))
      return
    }

    if (!error) await signUp.verifications.sendEmailCode()
  }

  const handleVerify = async (formData: FormData) => {
    const code = formData.get('code') as string

    await signUp.verifications.verifyEmailCode({ code })
    if (signUp.status === 'complete') {
      await signUp.finalize({
        // Redirect the user to the account page after signing up
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            // Handle pending session tasks
            // See https://clerk.com/docs/guides/development/custom-flows/authentication/session-tasks
            console.log(session?.currentTask)
            return
          }
          const url = decorateUrl('/')
          if (url.startsWith('http')) {
            window.location.href = url
          } else {
            router.push(url)
          }
        },
      })
    } else {
      // Check why the sign-up is not complete
      console.error('Sign-up attempt not complete:', signUp)
    }
  }

  if (signUp.status === 'complete' || isSignedIn) {
    console.log('user: ', user)
    router.push('/account')
    return null
  }

  if (
    signUp.status === 'missing_requirements' &&
    signUp.unverifiedFields.includes('email_address') &&
    signUp.missingFields.length === 0
  ) {
    return (
      <section className="signup-container">
      
        <h1>Ověřovací kód</h1>
        <form action={handleVerify}>
          <div>
            <label htmlFor="code">Kód</label>
            <input id="code" name="code" type="text" />
          </div>
          {errors.fields.code && <p>{errors.fields.code.message}</p>}
          <button type="submit" disabled={fetchStatus === 'fetching'}>
            Ověřit
          </button>
        </form>
        <button onClick={() => signUp.verifications.sendEmailCode()}>Nový kód</button>
      </section>
    )
  }

  return (
    <section className="signup-container">
      <h1>Registrujte se</h1>
      <h2>jako pořadatel</h2>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="name">zadejte jméno</label>
          <input id="firstName" type="text" name="firstName" />
          {/*errors.fields.emailAddress && <p>{errors.fields.emailAddress.message}</p>*/}
        </div>
        <div>
          <label htmlFor="surname">zadejte příjmení</label>
          <input id="lastName" type="text" name="lastName" />
          {/*errors.fields.emailAddress && <p>{errors.fields.emailAddress.message}</p>*/}
        </div>
        <div>
          <label htmlFor="email">zadejte emailovou adresu</label>
          <input id="email" type="email" name="email" />
          {/*errors.fields.emailAddress && <p>{errors.fields.emailAddress.message}</p>*/}
        </div>
        <div>
          <label htmlFor="password">zadejte heslo</label>
          <input id="password" type="password" name="password" />
          {/*errors.fields.password && <p>{errors.fields.password.message}</p>*/}
        </div>
        <div>
          <label htmlFor="confirm-pass">potvrďte heslo</label>
          <input id="confirm-pass" type="password" name="confirm-pass" />
          {/*errors.fields.password && <p>{errors.fields.password.message}</p>*/}
        </div>
        <button type="submit" disabled={fetchStatus === 'fetching'}>
          Registrovat se
        </button>
      </form>
      {/* For your debugging purposes. You can just console.log errors, but we put them in the UI for convenience */
      /* errors && <p>{JSON.stringify(errors, null, 2)}</p> */
      /* Required for sign-up flows. Clerk's bot sign-up protection is enabled by default */}
      <div id="clerk-captcha" />
    </section>
  )
}
