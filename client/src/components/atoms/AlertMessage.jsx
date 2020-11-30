import React from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1),
  },
}));


function AlertMessage({alerts, type, ...props }) {
  const classes = useStyles();
  const alertList = alerts[type];
  return alertList.map((alert) => (
    <Alert {...props} key={uuidv4()} className={classes.root}>
      {alert.msg}
    </Alert>
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
