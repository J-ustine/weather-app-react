import React from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Meteo from "./Meteo";
import Icon from "./Icon";

export default function Container() {
  return (
    <div className="container">
      <Search />
      <div className="row">
        <Meteo />
        <Temperature />
        <Icon />
      </div>
      <div className="row prevision" id="forecast"></div>
    </div>
  );
}
