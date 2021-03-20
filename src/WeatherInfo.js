import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="col-4">
      <div className="meteo-city">
        <h1 id="citySearch">{props.data.city}</h1>
        <h2 id="currentDate">
          <FormattedDate format={props.data.date} />
        </h2>
        <div id="description" className="text-capitalize">
          {props.data.description}
        </div>
        Humidity: <span id="precipitation">{props.data.humidity}</span>%
        <br />
        Wind: <span id="wind">{props.data.wind}</span>km/h
      </div>
    </div>
  );
}
