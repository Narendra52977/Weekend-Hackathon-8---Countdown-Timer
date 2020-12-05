import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [timer,setTimer]=useState(0);
  const handleKeydown=(e)=>{
    if(e.keyCode!==13){return;}
     setTimer(e.target.value);
  }
  useEffect(()=>{
    const id=setInterval(()=>{timer>=0?setTimer(timer-1):null;},1000);
    return ()=>clearInterval(id);
  },[timer]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeydown} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  )
}


export default App;
