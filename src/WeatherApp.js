import React from 'react'
import './WeatherApp.css'

const WeatherApp = () => {



  return (
    <div className='comp-wrapper'>
      <SearchComponent />
      <DetailsComponent />
    </div>
  )
}

export default WeatherApp;


/*---------- Search Component --------------*/

function SearchComponent () {
   return(
      <div>
          <input className='search-bar' type={"text"} placeholder={"Search Your Location"} /> <br/>
          <button className='search-btn'>Search</button>
      </div>
   )
}

/*---------- Details Component --------------*/

function DetailsComponent () {
   return(
      <div>
          <h2 className='location'>Location</h2>
          <h1 className='temp'>39° C</h1>
      </div>
   )
}