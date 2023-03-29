import { useState } from "react";
import axios from "axios";

function Form({ setWeather, setState }) {
  const [city, setCity] = useState("");

  const getWeather = async () => {
    const api = "56c2c87193e1777c4ddb53b6736a335a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    await axios(url).then((res) => setWeather(res.data));
    setState(true);
  };

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getWeather();
        }}
      >
        <h1>Weather</h1>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="input"
          placeholder="Enter City..."
        />
        <button className="btn" type="submit">
          Show Weather
        </button>
      </form>
    </div>
  );
}

export default Form;
