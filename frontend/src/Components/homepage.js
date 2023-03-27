import React from "react";

function Clock() {
  let mydate = new Date();
  let year = mydate.getFullYear();
  if (year < 1000) {
    year += 1900;
  }
  let day = mydate.getDay();
  let month = mydate.getMonth();
  let daym = mydate.getDate();
  let weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //Time
  let currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();
  if (h === 24) {
    h = 0;
  } else if (h > 12) {
    h = h - 0;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  let myClock = document.getElementById("clockDisplay");
  myClock.textContent =
    "" +
    weekdayNames[day] +
    " " +
    daym +
    monthNames[month] +
    " " +
    year +
    " | " +
    h +
    ":" +
    m +
    ":" +
    s;
  myClock.innerText =
    "" +
    weekdayNames[day] +
    " " +
    daym +
    monthNames[month] +
    " " +
    year +
    " | " +
    h +
    ":" +
    m +
    ":" +
    s;

  return <div>homepage</div>;
}

export default Clock;
