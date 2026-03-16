'use client'

import { useAuth, useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import "../../../../styles/forms.css"

export default function Page() {
  const { signUp, errors, fetchStatus } = useSignUp()
  const { isSignedIn } = useAuth()
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    
    const emailAddress = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPass = formData.get('confirm-pass') as string
    const name = { 
      name: formData.get('name'),
      surname: formData.get('surname')
    }

    if (password && confirmPass && password !== confirmPass) {
      console.error('Passwords do not match')
    }

    const { error } = await signUp.password({
      emailAddress,
      password,
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

    await signUp.verifications.verifyEmailCode({
      code,
    })
    if (signUp.status === 'complete') {
      await signUp.finalize({
        // Redirect the user to the home page after signing up
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
    router.push('/')
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
        <button onClick={() => signUp.verifications.sendEmailCode()}>I need a new code</button>
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
          <input id="name" type="text" name="name" />
          {/*errors.fields.emailAddress && <p>{errors.fields.emailAddress.message}</p>*/}
        </div>
        <div>
          <label htmlFor="surname">zadejte příjmení</label>
          <input id="surname" type="text" name="surname" />
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
    </section>
  )
}
