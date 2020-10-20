import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
export const Navigation = () => {
  return (
    <nav>
      <ButtonGroup fullWidth size="small" variant="text" color="primary">
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
