import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SuccessAlertTag = ({ isOpen, msg, onClose }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isOpen);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity='success'
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false);
                onClose();
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          {msg}
        </Alert>
      </Collapse>
    </div>
  );
};

export default SuccessAlertTag;
