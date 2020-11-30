import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
}));

export default function AppLogo(props) {
  const classes = useStyles(props);
  return (
    <Typography variant="h4" component="h1" className={classes.root}>
      <Box fontWeight="fontWeightBold">
        \\\Small Rocket
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </Box>
    </Typography>
  );
}
