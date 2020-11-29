import React from 'react';
import { Dialog, IconButton, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

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
  display: 'flex',
  marginTop: theme.spacing(5),
  minHeight: theme.spacing(56),
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',

    padding: theme.spacing(2),
    width: '300px',
  },
}))(MuiDialogContent);

export default function MyProfileFormDialog({ name, formComponent }) {
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

  return (
    <div>
      <Button
        fullWidth
        color="primary"
        variant="text"
        aria-label={name}
        onClick={handleClickOpen}
      >
        {name}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {name}
        </DialogTitle>
        <DialogContent dividers>{formComponent}</DialogContent>
      </Dialog>
    </div>
  );
}
