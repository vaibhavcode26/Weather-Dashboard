import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherWidget from "./components/WeatherWidget.jsx";
import Forecast from "./components/Forecast.jsx";
import WeatherConditions from "./components/WeatherConditions.jsx";
import "./WeatherDashboard.css";


function App() {
  const [city, setCity] = useState("Bengaluru");
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [conditions, setConditions] = useState([]);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a8cf30329e27714574305a8046705b71`
      );
      console.log(response);
      setWeatherData({
        temperature: response.data.main.temp, // Access temperature
        condition: response.data.weather[0].description, // Access weather condition
        location: response.data.name, // Access location name
        date: new Date().toLocaleString(), // Local time
        windSpeed: response.data.wind.speed, // Wind speed in m/s
        uvIndex: response.data.main.humidity || "N/A", // Humidity 
        sunrise: new Date(
          response.data.sys.sunrise * 1000
        ).toLocaleTimeString(), // Sunrise time
        sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString(),
      });
      // setForecastData(response.data.forecast.forecastday);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=a8cf30329e27714574305a8046705b71&units=metric`
      );
      console.log(forecastResponse);

      // Process the forecast data to get daily forecasts
      const dailyForecasts = forecastResponse.data.list.filter((reading) =>
        reading.dt_txt.includes("12:00")
      );

      setForecastData(dailyForecasts);
    } catch (error) {
      console.log("Failed to fetch data");
    }
  };
  const fetchConditions = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=1277333,1264527,1275339&units=metric&appid=a8cf30329e27714574305a8046705b71`
      );

      const formattedConditions = response.data.list.map((city) => ({
        city: city.name,
        condition: city.weather[0].description,
        temperature: city.main.temp,
      }));

      setConditions(formattedConditions);
    } catch (error) {
      console.error("Failed to fetch conditions", error);
    }
  };
  useEffect(() => {
    fetchConditions();
  }, []);

  const handleSearch = () => {
    // Trigger search based on the input city name
    fetchWeatherData();
  };

  return (
    <div>
      <div className="dashboard">
        <div className="search-bar">
          <h1 className="main-heading">Weather Dashboard</h1>
          <div>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <WeatherWidget weatherData={weatherData} />

        <div className="innerdashboard">
          <Forecast forecastData={forecastData} />
          <WeatherConditions conditions={conditions} />
        </div>
      </div>
    </div>
  );
}

export default App;










