import { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const [weather, setWeather] = useState([]);
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <Form setWeather={setWeather} setState={setState} />
      <Weather weather={weather} state={state} />
    </div>
  );
}

export default App;
