import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MailIcon from "@material-ui/icons/Mail";
function Mail() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  console.log(email, subject, message);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MailIcon onClick={handleClickOpen} />

      {/* <Button variant="outlined" onClick={handleClickOpen}>
      <MailIcon>
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Send Email Vollack</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            multiline
            rows={2}
            rowsMax={2}
            fullWidth
            variant="outlined"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Subject"
            multiline
            rows={2}
            rowsMax={2}
            fullWidth
            variant="outlined"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            label="Message"
            multiline
            rows={4}
            rowsMax={8}
            fullWidth
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            variant="outlined"
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="messsage"
            label="Message"
            type="text"
            fullWidth
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Mail;
