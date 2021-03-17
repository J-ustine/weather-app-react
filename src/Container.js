import React from "react";
import Sun from "./Media/Sun2.svg";

export default function Container() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-11">
          <form id="search">
            <input
              type="text"
              placeholder="Enter a city"
              id="form-input"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="col-1">
          <img
            className="location"
            src="https://www.materialui.co/materialIcons/communication/location_on_white_192x192.png"
            alt="location"
            width="35"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="meteo-city">
            <h1 id="citySearch">Sevilla</h1>
            <h2 id="currentDate">12 March</h2>
            <div id="description">Clear Sky</div>
            Humidity: <span id="precipitation">80</span>%
            <br />
            Wind: <span id="wind">12</span>km/h
          </div>
        </div>
        <div className="col-4">
          <div className="temperature">
            <span id="number">20</span>
            <a id="celsius" className="active" href="#" rel="noreferrer">
              °C
            </a>
            <span className="unit"> |</span>
            <a id="farenheit" href="#" rel="noreferrer">
              °F
            </a>
          </div>
        </div>
        <div className="col-2">
          <img className="media-meteo" id="mediaMeteo" src={Sun} alt="" />
        </div>
      </div>
      <div className="row prevision" id="forecast"></div>
    </div>
  );
}
