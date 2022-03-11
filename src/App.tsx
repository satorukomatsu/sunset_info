import React, { useRef } from 'react';
import './App.css';
import CurrentTime from './components/CurrentTime';
import { useState, useEffect } from 'react';

function App() {
  let [nowTime, setNowTime] = useState("")

  const now = new Date()
  let nowHour = now.getHours();
  let nowMin = now.getMinutes();
  let nowSec = now.getSeconds();
  let hours: string, minuites: string, seconds: string;
  hours = `${nowHour}`
  if (nowMin < 10) {
        minuites = `0${nowMin}`
  } else {
        minuites = `${nowMin}`
  }
  if (nowSec < 10) {
        seconds = `0${nowSec}`
  } else {
        seconds = `${nowSec}`
  }
    
  const currentTime = `${hours} : ${minuites} : ${seconds}`
  const ref = useRef(nowTime);

  useEffect (() => {
    setNowTime(ref.current = currentTime);
    setInterval(setNowTime, 1000);
  }, [currentTime])

  return (
    <div className="App">
      <CurrentTime time={nowTime}/>
    </div>
  );
}

export default App;
