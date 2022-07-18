import React, { useState } from 'react'
import axios, { Axios } from 'axios'
import './WeatherApp.css'

const WeatherApp = () => {
  return (
    <div className='comp-wrapper'>
      <Component />
    </div>
  )
}
export default WeatherApp;


/*------------ Component --------------*/

export function Component () {

   const [city,setCity] = useState("")
   const [temp,setTemp] = useState("")
   const [cityName, setCityName] = useState("")
   const [weather, setWeather] = useState("")

   const changeHandler = e => {
      setCity(e.target.value)
   }

   const submitHandler = e => {
      e.preventDefault();

      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73fe8d37d0b9d4ea1d88a5ecd8c4c2d0`)
      .then((res)=>{
         setWeather (res.data)
         const kelvin = res.data.main.temp
         const celsius = kelvin - 273.15
         setTemp(Math.round(celsius)+"° C")
         setCityName(res.data.name +", "+ res.data.sys.country)
         setCity("")
      }).catch(error => console.log(error))
   }

   return(
      <div>
      <form onSubmit={submitHandler}>
          <input className='search-bar' name="city" type="text" placeholder={"Search Your Location"} onChange={changeHandler} value={city}/> <br/>
          <input type="submit" className='search-btn' value="Get Weather"/>
      </form>
      <div>
         {(typeof weather.main != "undefined") ? (
            <div>
                <h2 className='location'>{cityName}</h2>
                <h1 className='temp'>{temp}</h1>
                <div className='weather-details'>
                    <p>Humidity : {weather.main.humidity}</p> 
                    <p>Pressure : {weather.main.pressure} </p>
                </div> 
            </div>
         ) : ('')}
      </div>
      </div>
   )
}