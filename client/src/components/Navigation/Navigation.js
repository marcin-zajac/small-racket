import React from 'react';
import { Link } from 'react-router-dom';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
export const Navigation = () => {
  return (
    <nav>
      <ButtonGroup fullWidth variant="text" color="primary">
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
