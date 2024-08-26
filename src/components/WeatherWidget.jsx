import React from 'react';


function WeatherWidget({ weatherData }) {
    return (
      <div className="weather-widget">
        <div className="current-weather">
          <div className="temperature">{weatherData.temperature}°C</div>
          <div className="condition">{weatherData.condition}</div>
          <div className="location">{weatherData.location}</div>
          <div className="date">{weatherData.date}</div>
        </div>

        <div className='wind-photo'>
        <div className="wind-status">
          <h3 className='heading'>Wind Status</h3>
          <p className="wind-status-number">{weatherData.windSpeed} Km/h</p>
        </div>
        <div >
          <img className='image1' src="https://imgs.search.brave.com/JtNQVMsDjiHCoTKJvbfNXrQIhoI5kIdMzBbTvje3CL0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3dpbmR5LXBu/Zy1oZC10aGlzLWZy/ZWUtaWNvbnMtcG5n/LWRlc2lnbi1vZi13/ZWF0aGVyLWljb24t/d2luZHktMjQwMC5w/bmc" alt="" />
        </div>
        </div>
        

        <div className='humidity-photo'>
        <div className="humidity">
          <h3 className='heading'>Humidity</h3>
          <p className="humidity-number">{weatherData.uvIndex}</p>
        </div>
        <div>
          <img className='image2' src="https://imgs.search.brave.com/6Uzzcgq4QgFBE_Oz88RFEQw7O5ijZK4kjT_igG6opAw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS90/aHVtYi93ZWF0aGVy/LzIzNzkzLTktd2Vh/dGhlci1waG90b3Mt/dGh1bWIucG5n" alt="" />
        </div>
        </div>
       
        <div className='sunrise-photo' >
        <div className="sunrise-sunset">
          <h3 className='heading'>Sunrise & Sunset</h3>
          <p>Sunrise: {weatherData.sunrise}</p>
          <p>Sunset: {weatherData.sunset}</p>
        </div>
        <div>
          <img className='image3' src="https://imgs.search.brave.com/4XsR4zXFPQcFaa5CamgzIfS1btFVEAI2gbOvlhHXnrc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS90/aHVtYi9zdW5yaXNl/LzMzOTk2LTUtc3Vu/cmlzZS1jbGlwYXJ0/LXRodW1iLnBuZw" alt="" />
        </div>

        </div>
       
      </div>
    );
  }
  
  export default WeatherWidget;