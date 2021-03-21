import React, { useState } from "react";
import axios from "axios";
import HourForecast from "./HourForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState();

  function handleRequest(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row prevision" id="forecast">
        <HourForecast data={forecast.list[0]} />
        <HourForecast data={forecast.list[1]} />
        <HourForecast data={forecast.list[2]} />
        <HourForecast data={forecast.list[3]} />
        <HourForecast data={forecast.list[4]} />
        <HourForecast data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = `94f7962a3f3dc99473c20e9f4d42062e`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleRequest);
    return "Loading";
  }
}
