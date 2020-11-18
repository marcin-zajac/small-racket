import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const MyProfileFormDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    // TODO: update data in databasee
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: handle send form data

  };

  return (
    <div>
      <IconButton
        color="primary"
        aria-label="user settings"
        component="span"
        onClick={handleClickOpen}
      >
        <SettingsIcon />
      </IconButton>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          My profile data
        </DialogTitle>
        <DialogContent dividers>
          <form id="my-data-form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl style={{ minWidth: 272 }}>
                  <InputLabel id="department-select-label">
                    Department
                  </InputLabel>
                  <Select
                    xs={12}
                    labelId="department-select-label"
                    id="department-select"
                    // value={age}
                    // onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Department Of Some</MenuItem>
                    <MenuItem value={20}>Departmentt III</MenuItem>
                    <MenuItem value={30}>Thirty Dep.</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone number"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id="role"
                  name="role"
                  label="Role / Position"
                  fullWidth
                  autoComplete="shipping country"
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id="avatar"
                  name="avatar"
                  label="Avatar URL"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onSubmit={handleSave}
            color="primary"
            type="submit"
            form="my-data-form"
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyProfileFormDialog;
