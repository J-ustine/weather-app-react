import React from "react";

export default function FormattedDate(props) {
  let day = props.format.getDay();
  let numberDate = props.format.getDate();
  let hours = props.format.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.format.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${week[day]} ${numberDate}, ${hours}:${minutes}`;
}
