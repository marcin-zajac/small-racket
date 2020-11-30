import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    margin: theme.spacing(2),
    width: theme.spacing(18),
    height: theme.spacing(18),
    background: 'linear-gradient(30deg, #00C9FF 0%, #92FE9D 100%)',
    borderRadius: theme.spacing(14),
    padding: theme.spacing(2),
    boxShadow: '0 3px 5px 2px rgba(102, 255, 255, .4)',
  },
}));

export default function AuthIcon({ login, register }) {
  const classes = useStyles();
  if (login) {
    return <LockOpenRoundedIcon className={classes.root} />;
  }
  if (register) {
    return <AssignmentIndOutlinedIcon className={classes.root} />;
  }
}
