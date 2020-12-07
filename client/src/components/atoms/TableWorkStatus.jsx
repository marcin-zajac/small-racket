import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';

const getIcon = (workStatus) => {
  switch (workStatus) {
    case 'Working':
      return <DoneOutlineIcon style={{ color: 'green' }} />;
    case 'Not working':
      return <HighlightOffIcon style={{ color: 'red' }} />;
    case 'Home office':
      return <HomeWorkIcon style={{ color: 'green' }} />;
    case 'Outside':
      return <TimeToLeaveIcon style={{ color: 'green' }} />;
    default:
      return <DoneOutlineIcon style={{ color: 'green' }} />;
  }
};

const TableWorkStatus = ({ workStatus }) => {
  return (
    <>
      <Tooltip title={workStatus} placement="top">
        {getIcon(workStatus)}
      </Tooltip>
    </>
  );
};

TableWorkStatus.propTypes = {
  status: PropTypes.oneOf(['Working', 'Not working', 'Home office', 'Outside']),
};

export default TableWorkStatus;
