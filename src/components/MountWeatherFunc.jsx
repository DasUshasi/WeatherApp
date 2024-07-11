import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './MountWeather.css'
import Time from './Time'
import ForecastFunc from './ForecastFunc'

export default function MountWeatherFunc({ lat, lon, countryname, cityname, key_openweathermap, key_weatherapi, key_ipgeolocation }) {
    const [data, setData] = useState([])
    const [main, setMain] = useState("")
    const [mainIcon, setMainIcon] = useState("")

    const [temp, setTemp] = useState(0)
    const [feelsLike, setFeelsLike] = useState(0)
    const [pressure, setPressure] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [visibility, setVisibility] = useState(0)
    const [wind, setWind] = useState(0)
    const [cloud, setCloud] = useState(0)
    const [rain, setRain] = useState(0)
    const [snow, setSnow] = useState(0)

    const [currTime, setCurrTime] = useState(0)
    const [sunrise, setsunrise] = useState(0)
    const [sunset, setsunset] = useState(0)

    const [loading, setLoading] = useState(true)
    const [invalid, setInvalid] = useState(false)
    const [bgcolor, setBgcolor] = useState("")
    const [color, setColor] = useState("")

    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key_openweathermap + '&units=metric';
    const imgUrl = 'https://openweathermap.org/img/wn/'

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                if (data.length !== 0) {
                    setMain(json.weather[0].description);
                    setMainIcon(imgUrl + json.weather[0].icon + '@2x.png');
                    setTemp(json.main.temp);
                    setFeelsLike(json.main.feels_like);
                    setPressure(json.main.pressure);
                    setHumidity(json.main.humidity);
                    setVisibility(json.visibility / 1000);
                    setWind(json.wind.speed);
                    setCloud(json.clouds.all);
                    setCurrTime(json.dt);
                    setsunrise(json.sys.sunrise);
                    setsunset(json.sys.sunset)
                    try {
                        setRain(json.rain['1hr'])
                    } catch (error) {
                        setInvalid(true)
                    }
                    try {
                        setSnow(json.snow['1hr'])
                    } catch (error) {
                        setInvalid(true)
                    }
                    if (currTime > 0) {
                        if (currTime >= sunrise && currTime < sunset) {
                            setBgcolor("linear-gradient(white,yellow)");
                            setColor("black")
                            document.body.style.backgroundColor='white'
                        }
                        else {
                            setBgcolor("linear-gradient(blueviolet,black)");
                            setColor("white")
                            document.body.style.backgroundColor='blueviolet'
                        }
                    }
                }
            })
            .catch((error) => setInvalid(true))
    })
    useEffect(() => {
        if (data.length !== 0 && currTime > 0 && bgcolor !== "")
            setLoading(false)
    })
    return (
        !loading && <div id='main' style={{ backgroundImage: bgcolor, color: color }}>
            <div id='block1'>
                <div id='info'>
                    <div id='cityname'>{cityname}</div>
                    <div id='countryname'>{countryname}<br></br><Time lat = {lat} lon = {lon} key_ipgeolocation = {key_ipgeolocation} /></div>
                    <img src={mainIcon} alt='...' />
                    <div id='maincond'>{main}</div>
                </div>
                <div id='temp'>
                    <div id='gen'>{temp} °C</div>
                    <div id='feelslike'>Feels like: {feelsLike} °C</div>
                </div>
            </div>
            <div id='extra'>
                <div id='humidity'>Humidity: {humidity} %</div>
                <div id='pressure'>Pressure: {pressure} Pa</div>
                <div id='cloud'>Cloudliness: {cloud} %</div>
                <div id='vis'>Visibility: {visibility} Km</div>
                <div id='windspeed'>Wind Speed: {wind} m/s</div>
                <div id='rain'>Rain: {rain} mm</div>
                {snow > 0 && <div id='snow'>Snow: {snow} mm</div>}
            </div>
            <ForecastFunc lat = {lat} lon = {lon} color = {color} key_weatherapi = {key_weatherapi} />
        </div>
    )
}