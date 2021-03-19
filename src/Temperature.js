import React from "react";

export default function Temperature() {
  return (
    <div className="col-4">
      <div className="temperature">
        <span id="number">20</span>
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
