import React from "react";

export default function FormattedDate(props) {
  let day = props.format.getDay();
  let numberDate = props.format.getDate();
  let hours = props.format.getHours();
  let minutes = props.format.getMinutes();
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
