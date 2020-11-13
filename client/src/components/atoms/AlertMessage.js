import React from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));

function AlertMessage({ alerts, ...props }) {
  const classes = useStyles();

  return alerts.map((alert) => (
    <Alert {...props} className={classes.root}>{alert.msg}</Alert>
  ));
}

AlertMessage.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertMessage);
