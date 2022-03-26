import React from "react";
import Box from '@mui/material/Box';
import { StandardTextField, OutlinedButton, PasswordField} from ".";

const boxStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '15px'
}

type Props = {
  name: string,
  email: string,
  password: string,
  showPassword: boolean,
  onChange: (prop: any) => (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick: () => void
}


const RegistrationForm:(props: Props) => JSX.Element = (props) => {
  return (
    <>
    <h2>メールでの通知登録はこちらから！！</h2>
    <Box
      style={boxStyle}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate={false}
      autoComplete="off"
    >
      <StandardTextField        
        label="user name"
        onChange={props.onChange}
      />
      <StandardTextField
        label="e-mail"
        onChange={props.onChange}
      />
      <PasswordField
        password={props.password}
        showPassword={props.showPassword}
        onChange={props.onChange}
        onClick={props.onClick}
      />
    </Box>
    <OutlinedButton
      title={'Register'}
      // onClick={Register}
    />
    </>
  );
}

export default RegistrationForm;