import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import HowToRegRoundedIcon from '@material-ui/icons/HowToRegRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import HeadsetMicRoundedIcon from '@material-ui/icons/HeadsetMicRounded';
import BlockIcon from '@material-ui/icons/Block';

const getChipParams = (status) => {
  switch (status) {
    case 'Available':
      return { color: '#4caf50', icon: <HowToRegRoundedIcon /> };
    case 'Bussy':
      return { color: '#ff3d00', icon: <HeadsetMicRoundedIcon /> };
    case 'Do not disturb':
      return { color: '#ffab00', icon: <AccessTimeRoundedIcon /> };
    case 'Away':
      return { color: '#bdbdbd', icon: <BlockIcon /> };
    default:
      return { color: '#bdbdbd', icon: <BlockIcon /> };
  }
};

const TableStatusChip = ({ status }) => {
  const params = getChipParams(status);
  return (
    <Chip
      variant="outlined"
      color="primary"
      size="small"
      label={status}
      icon={params.icon}
      key={uuidv4()}
      style={{ color: params.color, border: `1px solid ${params.color}` }}
    />
  );
};

TableStatusChip.propTypes = {
  status: PropTypes.oneOf(['Available', 'Bussy', 'Do not disturb', 'Away']),
};

export default TableStatusChip;
