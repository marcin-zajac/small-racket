import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));
export const Navigation = (props) => {
  const classes = useStyles(props);

  return (
    <nav>
      <ButtonGroup
        fullWidth
        size="small"
        variant="text"
        color="primary"
        className={classes.root}
      >
        <Button component={Link} to="/login">
          login
        </Button>
        <Button component={Link} to="/register">
          register
        </Button>
      </ButtonGroup>
    </nav>
  );
};
