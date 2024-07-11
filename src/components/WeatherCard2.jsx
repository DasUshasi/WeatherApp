import React from 'react'
import './WeatherCard.css'

export default function WeatherCard2({ info, color }) {
    return (
        <div id='maincard' style={{ color: color, borderColor: color }}>
            <div className='bigger'>{info.time.split(" ")[0]}</div>
            <div className='big'>{info.time.split(" ")[1]}</div>
            <div className='big'>{info.temp_c} °C</div>
            <img src={info.condition.icon} alt='...' />
            <div>{info.condition.text}</div>
        </div>
    )
}