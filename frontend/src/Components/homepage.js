import React from "react";
import { useState } from "react";

function Clock() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  const [currentTime, setCurrentTime] = useState(time);
  const [currentDate, setCurrentDate] = useState(date);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  const updateDate = () => {
    let date = new Date().toLocaleDateString();
  };

  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>{currentDate}</h1>
      <h1>{currentTime}</h1>
    </div>
  );
}

export default Clock;
