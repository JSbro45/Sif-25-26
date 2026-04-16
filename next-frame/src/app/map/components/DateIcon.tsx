
import { useRef, useState } from 'react';
import '../../styles/fikters.css'


function Multiselector() {
    'use client'
    const ref = useRef<HTMLInputElement | null>(null)
    const [options, setOptions] = useState<string[]>([])
    return (
        <div className="multiselector">
            <label> podle zanru: </label>
            <div>
                {options.map((option, index) => (
                    <div key={index} className="multiselector-option">
                        {option}
                        <button onClick={() => setOptions(options.filter(opt => opt !== option)) }>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="x-svg"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            <input className="filters-input" type="text" name="genres" ref={ref} />
        </div>
    )
}


import { redirect } from 'next/navigation'

export default function FilterBar() {
  async function handleFilter(formData: FormData) {
    'use server'
    
    const genre = formData.get('genre') as string
    const startDate = formData.get('startDate') as string
    const endDate = formData.get('endDate') as string
    
    const params = new URLSearchParams()
    if (genre) params.set('genre', genre)
    if (startDate) params.set('start', startDate)
    if (endDate) params.set('end', endDate)
    
    redirect(`/map?${params.toString()}`)
  }

  return (
    <form action={handleFilter} className="filter-bar">
      <input
        type="date"
        name="startDate"
      />
      <input
        type="date"
        name="endDate"
      />
      <button type="submit">Apply Filters</button>
    </form>
  )
}
