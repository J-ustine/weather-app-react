import React from "react";

export default function Meteo() {
  return (
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
  );
}
