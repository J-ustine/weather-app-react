import React from "react";

export default function Search() {
  return (
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
          alt="location-icon"
          width="35"
        />
      </div>
    </div>
  );
}
