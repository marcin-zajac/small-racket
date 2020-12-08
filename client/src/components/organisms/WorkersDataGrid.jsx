import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import { getAllUsers, getCurrentUser } from '../../store/users/usersActions';
import { connect } from 'react-redux';
import { Link } from '@material-ui/core';
import TableAvatar from '../atoms/TableAvatar';
import TableStatusChip from '../atoms/TableStatusChip';
import TableWorkStatus from '../atoms/TableWorkStatus';


const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  container: {
    maxHeight: 640,
  },
});

const columns = [
  {
    field: 'avatar',
    headerName: ' ',
    description: 'In this column is stored avatars.',
    sortable: false,
    width: 90,
    renderCell: (params) => {
      const role = params.getValue('role');
      const avatarUrl = params.getValue('avatarUrl');
      const initials = params.getValue('initials');
      return (
        <TableAvatar role={role} avatarUrl={avatarUrl} initials={initials} />
      );
    },
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'In this column is stored avatars.',
    sortable: true,
    width: 150,
    renderCell: (params) => {
      const status = params.getValue('status');
      return <TableStatusChip status={status} />;
    },
  },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'department', headerName: 'Department', width: 200 },
  {
    field: 'email',
    headerName: 'Email adress',
    sortable: true,
    width: 270,
    renderCell: (params) => (
      <Link href="mailto:acme@usa.com" onClick={null}>
        {params.getValue('email')}
      </Link>
    ),
  },
  { field: 'phone', headerName: 'Phone number', width: 130 },
  {
    field: 'workingStatus',
    headerName: 'Working status',
    sortable: false,
    width: 150,
    renderCell: (params) => {
      const workStatus = params.getValue('workStatus');

      return <TableWorkStatus workStatus={workStatus} />;
    },
  },
];

const WorkersDataGrid = ({ allUsers, getAllUsers, getCurrentUser }) => {
  useEffect(() => {
    getAllUsers();
    getCurrentUser();
  }, []);
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={allUsers}
          columns={columns}
          pageSize={8}
          rowHeight={70}
          disableSelectionOnClick
        />
      </div>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  allUsers: state.users.allUsers,
  currentUser: state.users.currentUser,
});
WorkersDataGrid.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  getCurrentUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getAllUsers, getCurrentUser })(
  WorkersDataGrid
);
