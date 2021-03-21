import React from "react";
import Icon from "./Icon";

export default function HourForecast(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    let tempMin = Math.round(props.data.main.temp_min);
    let tempMax = Math.round(props.data.main.temp_max);
    return (
      <span>
        <strong>{temperature}°C</strong>
        <br />
        <span className="minMax">
          {tempMin}°C - {tempMax}°C
        </span>
      </span>
    );
  }

  return (
    <div className="col">
      <div className="day">
        {hours()}
        <br />
        <span className="icon-prevision">
          <Icon code={props.data.weather[0].icon} />
        </span>
        <br />
        {temperature()}
      </div>
    </div>
  );
}
