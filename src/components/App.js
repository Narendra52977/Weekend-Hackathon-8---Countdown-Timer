import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [timer, setTimer] = useState(0);
  const handleKeydown = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
       let timeCount = Math.floor(event.target.value);
    if (typeof timeCount === "number" && timeCount >= 0) {
      setTimer(timeCount);
    } else setTimer(0);
  };
  useEffect(() => {
    import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [time, setTime] = useState(0);

  const handleTime = (event) => {
    if (event.keyCode !== 13) {
      return;
    }

    let timeCount = Math.floor(event.target.value);
    if (typeof timeCount === "number" && timeCount >= 0) {
      setTime(timeCount);
    } else setTime(0);
  };
  useEffect(() => {
    const id =
      time > 0 &&
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    return () => clearInterval(id);
  }, [time]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={(event) => handleTime(event)} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
    return () => clearInterval(id);
  }, [timer]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeydown} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
