import React, { useRef } from 'react';
import './App.css';
import CurrentTime from './components/CurrentTime';
import CurrentPosition from './components/CurrentPosition';
import SunsetTime from './components/SunsetTime';
import { useState, useEffect } from 'react';

function App() {
  const [nowTime, setNowTime] = useState("")
  const [position, setPosition] = useState({latitude: 0, longitude: 0});

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


  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;
        setPosition({latitude, longitude})
    })
  }

  useEffect (() => {
    setNowTime(ref.current = currentTime);
    setInterval(setNowTime, 1000);
  }, [currentTime])


  return (
    <div className="App">
      <CurrentTime time={nowTime}/>
      <CurrentPosition onClick={getPosition()} position={position}/>
      <SunsetTime/>
    </div>
  );
}

export default App;
