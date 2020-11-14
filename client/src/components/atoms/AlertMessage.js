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

function AlertMessage({ alerts, type, ...props }) {
  const classes = useStyles();
  const alertList = alerts[type]
  return alertList.map((alert, index) => (
    <Alert {...props} key={index} className={classes.root}>{alert.msg}</Alert>
  ));
}

AlertMessage.propTypes = {
  alerts: PropTypes.any,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertMessage);
