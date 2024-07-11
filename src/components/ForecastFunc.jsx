import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Forecast.css'
import Accordion from './Accordion'
import WeatherCard from './WeatherCard'
import WeatherCard2 from './WeatherCard2'

export default function ForecastFunc({ lat, lon, color, key_weatherapi }) {
    const [today, setToday] = useState([])
    const [tomorrow, setTomorrow] = useState([])
    const [nextday, setNextday] = useState([])
    const [part1done, setPart1done] = useState(false)
    const [hours, setHours] = useState([[]])
    const [timehr, setTimehr] = useState(-1)
    const [invalid, setInvalid] = useState(false)

    // const apikey = '2f5c960ad04d419ea7e31201240103'
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=' + key_weatherapi + '&q=' + lat + ',' + lon + '&days=3'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setToday([json.forecast.forecastday[0].date, json.forecast.forecastday[0].day.avgtemp_c, json.forecast.forecastday[0].day.condition.text, json.forecast.forecastday[0].day.condition.icon, json.forecast.forecastday[0].astro.sunrise, json.forecast.forecastday[0].astro.sunset]);
                setTomorrow([json.forecast.forecastday[1].date, json.forecast.forecastday[1].day.avgtemp_c, json.forecast.forecastday[1].day.condition.text, json.forecast.forecastday[1].day.condition.icon, json.forecast.forecastday[1].astro.sunrise, json.forecast.forecastday[1].astro.sunset]);
                setNextday([json.forecast.forecastday[2].date, json.forecast.forecastday[2].day.avgtemp_c, json.forecast.forecastday[2].day.condition.text, json.forecast.forecastday[2].day.condition.icon, json.forecast.forecastday[2].astro.sunrise, json.forecast.forecastday[2].astro.sunset]);
                setTimehr(parseInt(json.location.localtime.split(" ")[1].split(":")[0], 10))
                if (timehr !== -1)
                    setPart1done(true);
                if (part1done) {
                    if (timehr > 19) {
                        let fromFirst = 23 - timehr + 1
                        for (let i = 0; i < fromFirst; i++) {
                            if (hours.length < 6) {
                                var hoursTemp = hours
                                hoursTemp.push(json.forecast.forecastday[0].hour[timehr + i])
                                setHours(hoursTemp)
                            }
                        }
                        for (let i = 0; i < 5 - fromFirst; i++) {
                            if (hours.length < 6) {
                                var hoursTemp = hours
                                hoursTemp.push(json.forecast.forecastday[1].hour[i])
                                setHours(hoursTemp)
                            }
                        }
                        setPart1done(false);
                    } else {
                        for (let i = 0; i < 5; i++) {
                            if (hours.length < 6) {
                                var hoursTemp = hours
                                hoursTemp.push(json.forecast.forecastday[0].hour[timehr + i])
                                setHours(hoursTemp)
                            }
                        }
                        setPart1done(false);
                    }
                }
            }).catch((error) => setInvalid(true))
    })
    return (
        <Accordion id='accordion' color={color}
            title1={'Weather for next 3 days'}
            content1={
                <div id='forecast'>
                    <WeatherCard info={today} color={color} />
                    <WeatherCard info={tomorrow} color={color} />
                    <WeatherCard info={nextday} color={color} />
                </div>}
            title2={'Weather for next 5 hours'}
            content2={
                <div id='forecast'>
                    <WeatherCard2 info={hours[1]} color={color} />
                    <WeatherCard2 info={hours[2]} color={color} />
                    <WeatherCard2 info={hours[3]} color={color} />
                    <WeatherCard2 info={hours[4]} color={color} />
                    <WeatherCard2 info={hours[5]} color={color} />
                </div>} />
    )
}