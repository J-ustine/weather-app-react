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
    return (
      <div className="col-4">
        <div className="temperature">
          <span id="number">{Math.round(fahrenheit())}</span>
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
