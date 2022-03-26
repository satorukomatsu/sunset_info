import React from 'react';
import Button from '@mui/material/Button';

type Props = {
    title: string
    // onClick: () => void
}

const OutlinedButton = (props: Props) => {
  return (
      <Button variant="outlined">{props.title}</Button>
  );
}

export default OutlinedButton;