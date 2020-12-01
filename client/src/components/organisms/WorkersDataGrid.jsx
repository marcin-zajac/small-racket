import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import { getAllUsers, getCurrentUser } from '../../store/users/usersActions';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';

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
    headerName: 'Avatar',
    description: 'In this column is stored avatars.',
    sortable: false,
    width: 160,
    renderCell: () =>( <Avatar alt="SD" src='ggg'>jj</Avatar>)


  },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${
        params.getValue('lastName') || ''
      }`,
  },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 22, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 32, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 42, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 52, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 62, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 72, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 82, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 92, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 21, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 31, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 41, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 51, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 61, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 71, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 81, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 91, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const WorkersDataGrid = ({
  allUsers,
  getAllUsers,
  currentUser,
  getCurrentUser,
}) => {
    const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowHeight={58}
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
