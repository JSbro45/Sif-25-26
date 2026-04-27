'use server'

import '../../styles/filters.css'
import { redirect } from 'next/navigation'


export default async function FilterBar() {
  async function handleFilter(formData: FormData) {
    'use server'

    const params = { 
        genre: formData.get('genre') as string,
        start: formData.get('startDate') as string,
        end: formData.get('endDate') as string
    } 

    const urlParams = new URLSearchParams()
    for (const key in params) {
      if (params[key as keyof typeof params]) {
        urlParams.set(key, params[key as keyof typeof params])
      }
    }

    redirect(`/map?${urlParams.toString()}`)
  }

  return (
    <form action={handleFilter} className="filter-bar">
      <input type="date" name="startDate" />
      <input type="date" name="endDate" />
      <button type="submit"> Filtruj </button>
    </form>
  )
}
