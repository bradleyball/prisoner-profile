/* eslint-disable default-case */
import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import "../App.css";
import { auth, firestore } from "../firebase";
import {
  PrisonNameContext,
  StreetContext,
  PStateContext,
  CityContext,
  ZipContext,
  ContactNameContext,
  PhoneNumberContext,
  ContactEmailContext
} from "../providers/PrisonFormProvider";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function PrisonDialogForm(props) {
  const [open, setOpen] = React.useState(false);
  const { classes } = props;
  const { prisonName, setPrisonName } = useContext(PrisonNameContext);
  const { street, setStreet } = useContext(StreetContext);
  const { pState, setPState } = useContext(PStateContext);
  const { city, setCity } = useContext(CityContext);
  const { zip, setZip } = useContext(ZipContext);
  const { contactName, setContactName } = useContext(ContactNameContext);
  const { phoneNumber, setPhoneNumber } = useContext(PhoneNumberContext);
  const { contactEmail, setContactEmail } = useContext(ContactEmailContext);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleSubmit = event => {
    event.preventDefault();

    const { uid, displayName, email, photoURL } = auth.currentUser || {};
    const post = {
      prisonName,
      prisonAddress: {
        street,
        city,
        pState,
        zip
      },
      prisonContact: {
        contactName,
        position,
        contactEmail,
        phoneNumber
      },
      user: {
        uid,
        displayName,
        email,
        photoURL
      },

      createdAt: new Date()
    };

    firestore.collection("posts").add(post);
    handleClose();
  };

  const handleChanges = e => {
    switch (e.target.name) {
      case "street":
        setStreet(e.target.value);
        break;
      case "prisonName":
        setPrisonName(e.target.value);
        break;
      case "pState":
        setPState(e.target.value);
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "zip":
        setZip(e.target.value);
        break;
      case "contactName":
        setContactName(e.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(e.target.value);
        break;
      case "contactEmail":
        setContactEmail(e.target.value);
        break;

      case "position":
        setPosition(e.target.value);
        break;
    }
  };

  return (
    <div>
      <div className="prison-form-wrapper">
        <div className="prison-fab-wrapper">
          <Fab
            id="prison-fab-button"
            color="primary"
            aria-label="Add"
            className={`${classes.fab} prison-fab-button`}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </Fab>
          <h2 className="prison-fab-h2">Register Your Prison</h2>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">General Info</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Name Of Institution"
              name="prisonName"
              value={prisonName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Street"
              name="street"
              value={street}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="City"
              name="city"
              value={city}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="State"
              name="pState"
              value={pState}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Zipcode"
              name="zip"
              value={zip}
              onChange={handleChanges}
              fullWidth
            />

            <DialogTitle id="form-dialog-title">Contact Info</DialogTitle>

            <TextField
              margin="dense"
              id="name"
              label="Contact Name"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="position"
              value={position}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Email"
              name="contactEmail"
              value={contactEmail}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onSubmit={handleSubmit} type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(PrisonDialogForm);
