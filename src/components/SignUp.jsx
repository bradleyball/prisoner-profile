/* eslint-disable default-case */
import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { auth, createUserProfileDocument } from "../firebase";

function SignUp() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChanges = e => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;

      case "displayName":
        setDisplayName(e.target.value);
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
    } catch (error) {
      alert(error);
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDisplayName("");
    handleClose();
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {" "}
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">Create An Account</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Full Name"
              type="displayName"
              name="displayName"
              value={displayName}
              onChange={handleChanges}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>

            <Button
              onSubmit={handleSubmit}
              color="primary"
              type="submit"
              value="Sign In"
            >
              Create Account
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default SignUp;
