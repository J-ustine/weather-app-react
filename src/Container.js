import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Temperature from "./Temperature";
import Icon from "./Icon";
import axios from "axios";

export default function Container(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [WeatherData, setWeatherData] = useState({ ready: false });

  function handleRequest(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    let apiKey = `94f7962a3f3dc99473c20e9f4d42062e`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleRequest);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function defineCity(event) {
    setCity(event.target.value);
  }

  if (WeatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-11">
            <form id="search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city"
                id="form-input"
                autoComplete="off"
                onChange={defineCity}
              />
            </form>
          </div>
          <div className="col-1">
            <img
              className="location"
              src="https://www.materialui.co/materialIcons/communication/location_on_white_192x192.png"
              alt="location-icon"
              width="35"
            />
          </div>
        </div>
        <div className="row">
          <WeatherInfo data={WeatherData} />
          <Temperature data={WeatherData} />
          <Icon />
        </div>
        <div className="row prevision" id="forecast"></div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
