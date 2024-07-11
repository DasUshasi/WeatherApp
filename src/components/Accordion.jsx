import React, { useState } from 'react'
import './Accordion.css'

export default function Accordion({ color, title1, content1, title2, content2 }) {
    const [active1, setactive1] = useState(false)
    const [active2, setactive2] = useState(false)
    return (
        <div className='accordion' style={{ color: color, borderColor: color }}>
            <div className='accordion-item' style={{ color: color, borderColor: color }}>
                <div className='title' onClick={() => { setactive1(!active1); setactive2(false) }} style={{ color: color, borderColor: color }}>
                    {title1}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                    </svg>
                </div>
                {active1 && <div className='content' style={{ color: color, borderColor: color }}>{content1}</div>}
            </div>
            <div className='accordion-item' style={{ color: color, borderColor: color }}>
                <div className='title' onClick={() => { setactive2(!active2); setactive1(false) }} style={{ color: color, borderColor: color }}>
                    {title2}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                    </svg>
                </div>
                {active2 && <div className='content' style={{ color: color, borderColor: color }}>{content2}</div>}
            </div>
        </div>
    )
}