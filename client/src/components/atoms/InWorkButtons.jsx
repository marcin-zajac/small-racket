import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

const useStyles = makeStyles({
  root: {
    width: '100%',
    '& .MuiToggleButton-root': {
      width: '100%',
      color: 'white',
    },
  },
  workingBtn: {},
  notWorkingBtn: {},
});

export default function InWorkButtons() {
  const classes = useStyles();
  // TODO: get working state from database (check is worker in work now and set button group)
  const [active, setActive] = useState(true);

  const handleActive = (event, newActive) => {
    if (newActive !== null) {
      setActive(newActive);
      // TODO: Update status in database
    }
  };

  const workingBtnBackgrounds = {
    normal: 'rgba(0, 0, 0, 0.3)',
    working: 'rgba(0, 255, 0, 0.3)',
    notWorking: 'rgba(255, 0, 0, 0.3)',
  };

  return (
    <ToggleButtonGroup
      className={classes.root}
      value={active}
      exclusive
      onChange={handleActive}
      aria-label="text alignment"
    >
      <ToggleButton
        style={
          active === true
            ? { backgroundColor: workingBtnBackgrounds.notWorking }
            : { backgroundColor: workingBtnBackgrounds.normal }
        }
        value={true}
      >
        Not working
      </ToggleButton>
      <ToggleButton
        style={
          active !== true
            ? { backgroundColor: workingBtnBackgrounds.working }
            : { backgroundColor: workingBtnBackgrounds.normal }
        }
        value={false}
      >
        Working
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
