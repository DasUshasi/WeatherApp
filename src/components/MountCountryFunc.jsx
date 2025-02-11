import React from 'react'
import countryList from 'react-select-country-list'
import { useState } from 'react'
import { useEffect } from 'react'
import MountWeatherFunc from './MountWeatherFunc'
import './MountCountry.css'
import Alert from './Alert'

export default function MountCountryFunc(props) {
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [loading, isLoading] = useState(false)
    const [invalid, isInvalid] = useState(false)
    const [start, setStart] = useState(false)
    const [show, setShow] = useState(false)
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        isInvalid(false)
        isLoading(true)
        setShow(false)
        setLat(null)
        setLon(null)
        setCity(e.target[1].value)
        setCountry(e.target[0].value)
        setStart(true)
    }
    useEffect(() => {
        if (start) {
            isLoading(true)
            if (start) {
                const countrycode = countryList().getValue(country)
                const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + countrycode + '&appid=' + props.key_openweathermap + '&units=metric';
                fetch(url)
                    .then((response) => response.json())
                    .then((json) => {
                        setLat(json.coord.lat);
                        setLon(json.coord.lon)
                    })
                    .catch((error) => isInvalid(true))
            }
            var str = city.charAt(0).toUpperCase() + city.slice(1)
            setCity(str)
            setTimeout(() => {
                isLoading(false)
            }, 2000);
            setStart(false)
            setShow(true)
        }
    })
    return (
        <div id='ogbody'>
            <form id='form' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Enter country name:
                    </label>
                    <select className="form-control" id="exampleFormControlInput1" defaultValue="India" >
                        {countryList().getLabels().map(country => {
                            return (<option value={country} key={country}>{country}</option>)
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter city name:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="city" />
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-light" />
                </div>
            </form>
            {loading &&
                <div className="d-flex justify-content-center" style={{ marginTop: 50 + "px" }}>
                    <div className="spinner-border text-info" role="status" style={{ width: 3 + "rem", height: 3 + "rem" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            {!loading && invalid && <Alert msg={"Invalid Location"} style={{ marginTop: 50 + "px" }} />}
            {!loading && lat !== null && show && <MountWeatherFunc lat = {lat} lon = {lon} countryname = {country} cityname = {city} key_openweathermap = {props.key_openweathermap} key_weatherapi = {props.key_weatherapi} key_ipgeolocation = {props.key_ipgeolocation} />}
        </div >
    )
}
