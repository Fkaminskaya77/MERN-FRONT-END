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
    <div className="home--page">
      <p className="home__date">{currentDate}</p>
      <p className="home__time">{currentTime}</p>
    </div>
  );
}

export default Clock;
