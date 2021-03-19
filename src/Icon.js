import React from "react";
import Sun from "./Media/Sun2.svg";

export default function Icon() {
  return (
    <div className="col-2">
      <img className="media-meteo" id="mediaMeteo" src={Sun} alt="sun-icon" />
    </div>
  );
}
