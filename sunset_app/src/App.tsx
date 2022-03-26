import React from 'react';
import './App.css';
import { DateAndTime, RegistrationForm, SunsetTime } from './components';
import { useState, useEffect } from 'react';

function App() {
  const [currentDateAndTime, setCurrentDateAndTime] = useState(new Date());
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false
  })

  //位置情報の取得
  const obtainLocation = async () => {
    const success = (pos: GeolocationPosition) => {
      const {latitude, longitude} = pos.coords;
      setLocation({latitude : latitude, longitude : longitude})
    }

    type Error = {
      code: number
      message: string
    }
    
    const error = (err: Error) => {
      alert(`ERROR(${err.code}): ${err.message}`)
    }
    const option = {
      enableHighAccuracy: false,
      timeout: 5000,
      maxmumAge: 0
    }

    await navigator.geolocation.getCurrentPosition(success, error, option)
  }

  //入力各項目の情報取得
  type State = {
    name: string
    email: string
    password: string
    showPassword: boolean
  }
  const handleChange = (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, [prop]: e.target.value})
  }
  //パスワードの表示・非表示用関数
  const togglePassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  }

  //マウンティング時に呼び出す関数
  useEffect (() => {
    setInterval(() => setCurrentDateAndTime(new Date()), 1000);
  })

  useEffect(() => {
    obtainLocation();
  }, [])

  return (
    <div className="App">
      <DateAndTime 
        date={currentDateAndTime.toLocaleDateString()}
        time={currentDateAndTime.toLocaleTimeString()}
      />
      <SunsetTime/>
      <RegistrationForm 
        name={values.name}
        email={values.email}
        password={values.password}
        showPassword={values.showPassword}
        onChange={handleChange}
        onClick={togglePassword}
      />
    </div>
  );
}

export default App;
