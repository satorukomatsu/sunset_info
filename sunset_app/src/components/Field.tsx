import React from "react";
import TextField from '@mui/material/TextField';

type Props = {
    type?: string
    style?: React.CSSProperties
    id: string
    label: string
    variant: "standard" | "filled" | "outlined"
    onChange: (e: any) => void
    endAdornment?: React.ReactElement
}
const Field:(props: Props) => JSX.Element = (props: Props) => {
  return (
      <TextField type={props.type} style={props.style} id={props.id} label={props.label} variant={props.variant}/>
  );
}

export default Field;