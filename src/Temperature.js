import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="col-4">
        <div className="temperature">
          <span id="number">{Math.round(props.data.temperature)}</span>
          <button id="celsius" className="unit">
            °C
          </button>
          <span className="unit"> |</span>
          <button
            id="fahrenheit"
            className="active unit"
            onClick={showFahrenheit}
          >
            °F
          </button>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.data.temperature * 9) / 5 + 32;
    return (
      <div className="col-4">
        <div className="temperature">
          <span id="number">{Math.round(fahrenheit)}</span>
          <button id="celsius" className="active unit" onClick={showCelsius}>
            °C
          </button>
          <span className="unit"> |</span>
          <button id="fahrenheit" className=" unit">
            °F
          </button>
        </div>
      </div>
    );
  }
}
