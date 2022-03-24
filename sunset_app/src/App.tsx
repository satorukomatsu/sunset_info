import React, { useRef } from 'react';
import './App.css';
import { CurrentTime, RegistrationForm, SunsetTime } from './components';
import { useState, useEffect } from 'react';

function App() {
  //現在時刻のステイト
  const [nowTime, setNowTime] = useState(new Date());
  //現在の位置情報のステイト
  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  //位置情報の取得
  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude, longitude} = position.coords;
        setPosition({latitude : latitude, longitude : longitude})
    })
  }

  //マウンティング時に呼び出す関数
  useEffect (() => {
    setInterval(() => setNowTime(new Date()), 1000);
  })

  useEffect(() => {
    getPosition();
  }, [])

  return (
    <div className="App">
      <CurrentTime date={nowTime.toLocaleDateString()} time={nowTime.toLocaleTimeString()}/>
      <RegistrationForm />
      <SunsetTime/>
    </div>
  );
}

export default App;
