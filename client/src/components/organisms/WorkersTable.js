import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Tooltip from '@material-ui/core/Tooltip';
import { acmeWorkers } from '../../utils/placeholderData';
import { getAllUsers } from '../../actions/users';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const headCells = [
  {
    id: 'workerName',
    label: 'Name',
    minWidth: 170,
  },
  { id: 'department', label: 'Department', minWidth: 100, align: 'center' },
  {
    id: 'email',
    label: 'Email adress',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'phone',
    label: 'Phone number',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'workStatus',
    label: 'Work status',
    minWidth: 170,
    align: 'center',
  },
];

function createData(workerName, department, email, phone, role, workStatus) {
  workerName = (
    <Tooltip title="Manager">
      <span role="img" aria-label="role-icon">
        {role ? `${workerName} 👑` : workerName}
      </span>
    </Tooltip>
  );

  workStatus
    ? (workStatus = <CheckIcon style={{ color: 'green' }} />)
    : (workStatus = <ClearIcon style={{ color: 'red' }} />);

  return { workerName, department, email, phone, workStatus };
}

const rows = [];
acmeWorkers.forEach((worker) => {
  const data = createData(...worker);
  rows.push(data);
});

const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  container: {
    maxHeight: 640,
  },
});

function WorkersTable({ getAllUsers, token }) {
  useEffect(() => {
    getAllUsers(token);
  }, []);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {' '}
              {headCells.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.code}>
                    {headCells.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});
WorkersTable.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getAllUsers })(WorkersTable);
