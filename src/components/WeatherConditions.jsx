import React from 'react';


function WeatherConditions({ conditions }) {
  if(!Array.isArray(conditions)){
    return;
  }
  return (
    <div className="weather-conditions">
      <h2 className='heading'>Weather Conditions</h2>
      <div className="conditions-list">
        {conditions.map((condition, index) => (
          <div key={index} className="condition-item">
            <div className='condition-item-text'>
            <h4>{condition.city}</h4>
            <p>{condition.condition}</p>
            <p>{condition.temperature}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherConditions;


