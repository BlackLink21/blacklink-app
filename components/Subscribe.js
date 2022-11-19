import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Subscribe() {
  const [open, setOpen] = React.useState(true);
  const [email, setEmail] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };
  const subscribe = async (e) => {
    console.log({
      email,
    });
    await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    setOpen(false);
    setEmail('');
  };

  return (
    <form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={subscribe}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
