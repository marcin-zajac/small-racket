import { Avatar, Badge, Tooltip } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
 

const TableAvatar = ({ role, avatarUrl, initials }) => {
  return (
    <Tooltip title={role === 'Worker' ? "" : role} placement="right" >

    <Badge
      overlap="circle"
      badgeContent={role === 'Manager' ? '👑' : role === 'Admin' ? '🅰️' : ''}
    >
      <Avatar alt="" src={avatarUrl} key={uuidv4()}>
        {initials}
      </Avatar>
    </Badge>
    </Tooltip>
  );
};

TableAvatar.propTypes = {
  role: PropTypes.string,
  avatarUrl: PropTypes.string,
  initials: PropTypes.string,
};

export default TableAvatar;
