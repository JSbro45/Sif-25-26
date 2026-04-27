export const XButton = ({ onClose }: { onClose: () => void }) => 
    <button className='x-btn' onClick={onClose}>
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
        <line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>

import { useRef, useState } from "react";


export const Multiselector = () => {
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
                        <XButton onClose={() => setOptions(options.filter(opt => opt !== option))} />
                    </div>
                ))}
            </div>
            <input className="filters-input" type="text" name="genres" ref={ref} />
        </div>
    )
}

import { Show } from "@clerk/nextjs";
import Link from "next/link";

export function PlusBar() {
    return (
        <Show when={'signed-in'}>
            <Link href="/forms/add_event" className='link-in-btn'>
                <button className="round-btn" id="ddToggle" title="Open menu" style={{fontSize: "xx-large", color:"#ecfd00"}}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="feather feather-plus"
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </Link>
        </Show>
        )
    }
