import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.data.temperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="col-4">
        <div className="temperature">
          <span id="number">{Math.round(props.data.temperature)}</span>
          <span className="unit">
            <button id="celsius">°C |</button>
            <button id="fahrenheit" onClick={showFahrenheit}>
              °F
            </button>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-4">
        <div className="temperature">
          <span id="number">{Math.round(fahrenheit())}</span>
          <span className="unit">
            <button id="celsius" onClick={showCelsius}>
              °C
            </button>
            <button id="fahrenheit">| °F</button>
          </span>
        </div>
      </div>
    );
  }
}
