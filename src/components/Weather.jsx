import React from "react";

function Info({ weather, state }) {
  return (
    <div>
      {state ? (
        <div className="info">
          <p id="city">
            {weather.name}-{weather.sys.country}
          </p>
          <p id="temp">{Math.round(weather.main.temp)} °C</p>
          <p id="desc">{weather.weather[0].description.toUpperCase()}</p>
          <p id="felt">
            Temperature felt: {Math.round(weather.main.feels_like)} °C
          </p>
          <p id="min-max">
            {weather.main.temp_min}°C - {weather.main.temp_max}°C
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Info;
