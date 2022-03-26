import React from "react";
import TextField from '@mui/material/TextField';

type Props = {
    label: string
    onChange: (e: any) => void
}
const StandardTextField:(props: Props) => JSX.Element = (props: Props) => {
  return (
      <TextField
        id="standard-basic"
        variant="standard"
        label={props.label}
        onChange={props.onChange}
      />
  );
}

export default StandardTextField;