import React, { useState } from "react";
import Search from "./Search";
import Icon from "./Icon";
import axios from "axios";

export default function Container(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function handleRequest(event) {
    setWeatherData({
      ready: true,
      temperature: event.data.main.temp,
      date: "12 March",
      humidity: event.data.main.humidity,
      wind: event.data.wind.speed,
      city: event.data.name,
      description: event.data.weather[0].description,
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="container">
        <Search />
        <div className="row">
          <div className="col-4">
            <div className="meteo-city">
              <h1 id="citySearch">{props.defaultCity}</h1>
              <h2 id="currentDate">{WeatherData.date}</h2>
              <div id="description" class="text-capitalize">
                {WeatherData.description}
              </div>
              Humidity: <span id="precipitation">{WeatherData.humidity}</span>%
              <br />
              Wind: <span id="wind">{WeatherData.wind}</span>km/h
            </div>
          </div>
          <div className="col-4">
            <div className="temperature">
              <span id="number">{Math.round(WeatherData.temperature)}</span>
              <button id="celsius" className="active unit">
                °C
              </button>
              <span className="unit"> |</span>
              <button id="farenheit" className="unit">
                °F
              </button>
            </div>
          </div>
          <Icon />
        </div>
        <div className="row prevision" id="forecast"></div>
      </div>
    );
  } else {
    let apiKey = `94f7962a3f3dc99473c20e9f4d42062e`;
    let city = "Marseille";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleRequest);
    return "Loading";
  }
}
