import React, { useRef } from 'react';
import './App.css';
import CurrentTime from './components/CurrentTime';
import CurrentPosition from './components/CurrentPosition';
import SunsetTime from './components/SunsetTime';
import { useState, useEffect } from 'react';

function App() {
  //現在時刻のステイト
  const [nowTime, setNowTime] = useState("")
  //現在の位置情報のステイト
  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  //年月日、時間の取得
  const now = new Date()
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();
  const nowHour = now.getHours();
  const nowMin = now.getMinutes();
  const nowSec = now.getSeconds();
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
    
  const currentTime = `${nowYear} / ${nowMonth} / ${nowDate}   ${hours} : ${minuites} : ${seconds}`
  const ref = useRef(nowTime);

  //位置情報の取得
  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;
        setPosition({latitude : latitude, longitude : longitude})
    })
  }

  //マウンティング時に呼び出す関数
  useEffect (() => {
    setNowTime(ref.current = currentTime);
    // setInterval(setNowTime, 1000);
    getPosition();
  }, [currentTime, position])

  return (
    <div className="App">
      <CurrentTime time={nowTime}/>
      <CurrentPosition position={position}/>
      <SunsetTime/>
    </div>
  );
}

export default App;
