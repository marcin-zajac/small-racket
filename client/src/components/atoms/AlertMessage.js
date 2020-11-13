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
  console.log(alertList);

  return alertList.map((alert) => (
    <Alert {...props} className={classes.root}>{alert.msg}</Alert>
  ));
}

AlertMessage.propTypes = {
  alerts: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertMessage);
