import React from "react";
import Box from '@mui/material/Box';
import { Field, OutlinedButton} from ".";
import {useState} from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';


const boxStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '15px'
}

const RegistrationForm:() => JSX.Element = () => {

  type State = {
    name: string
    email: string
    password: string
    showPassword: boolean
  }
  //入力フォームのステイト
 const [values, setValues] = useState({
   name: "",
   email: "",
   password: "",
   showPassword: false
 })

 //入力各項目の情報取得
 const handleChange = (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
   setValues({...values, [prop]: e.target.value})
 }

 //パスワードの表示・非表示用関数
 const togglePassword = () => {
  setValues({...values, showPassword: !values.showPassword});
}

 //登録用関数
 const Register = () => {
  const registeredName = values.name
  const registeredEmail = values.email
  const registeredPassword = values.password
 }

  return (
    <>
    <Box
      style={boxStyle}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate={false}
      autoComplete="off"
    >
      <Field 
        id="standard-basic"
        label="user name"
        variant="standard"
        onChange={handleChange("name")}
      />
      <Field
        id="standard-basic"
        label="e-mail"
        variant="standard"
        onChange={handleChange("email")}
      />
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    </Box>
    <OutlinedButton
      title={'Register'}
      onClick={Register}
    />
    </>
  );
}

export default RegistrationForm;

// style={fieldStyle}