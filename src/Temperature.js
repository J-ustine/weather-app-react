import React from "react";

export default function Temperature(props) {
  return (
    <div className="col-4">
      <div className="temperature">
        <span id="number">{Math.round(props.data.temperature)}</span>
        <button id="celsius" className="active unit">
          °C
        </button>
        <span className="unit"> |</span>
        <button id="farenheit" className="unit">
          °F
        </button>
      </div>
    </div>
  );
}
