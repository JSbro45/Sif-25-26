'use client'

import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import "../../../../styles/forms.css"

export default function Page() {
  const { signIn, errors, fetchStatus } = useSignIn()
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    const emailAddress = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await signIn.password({ emailAddress, password })
    if (error) {
      console.error(JSON.stringify(error, null, 2))
      return
    }
    if (signIn.status === 'complete') {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) return
          const url = decorateUrl('/account')
          if (url.startsWith('http')) {
            window.location.href = url
          } else {
            router.push(url)
          }
        },
      })
    }
  }

  return (
    <section className="container">
      <h1>Přihlaste se</h1>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="email"> Zadejte emailovou adresu </label>
          <input id="email" name="email" type="email" />
        </div>
        {errors.fields.identifier && <p>{errors.fields.identifier.message}</p>}
        <div>
          <label htmlFor="password"> Zadejte heslo </label>
          <input id="password" name="password" type="password" />
        </div>
        {errors.fields.password && <p>{errors.fields.password.message}</p>}
        <div>
        <button type="submit" disabled={fetchStatus === 'fetching'}> Pokračovat </button>
        </div>
      </form>
    </section>
  )
}


