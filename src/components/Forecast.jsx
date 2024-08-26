

function Forecast({ forecastData }) {
  return (
    <div className="forecast">
      <h2 className='heading'>5 Days Forecast</h2>
      <div className="forecast-days">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-day">
            <div>{new Date(day.dt * 1000).toLocaleDateString()}</div>
            <div>{day.weather[0].description}</div>
            <div>{day.main.temp}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;