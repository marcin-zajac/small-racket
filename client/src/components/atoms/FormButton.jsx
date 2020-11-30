import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    border: 0,
    color: 'white',
    background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
    boxShadow: '0 3px 5px 2px rgba(102, 255, 255, .4)',
    width: '100%',
  },
});

export default function FormButton({ value, ...props }) {
  const classes = useStyles(props);
  return (
    <Button variant="outlined" className={classes.root} {...props}>
      {value}
    </Button>
  );
}
