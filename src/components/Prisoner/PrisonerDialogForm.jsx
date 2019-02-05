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
import "../../App.css";
import { auth, firestore } from "../../firebase";
import {
  PrisonNameContext,
  StreetContext,
  PStateContext,
  CityContext,
  ZipContext,
  ContactNameContext,
  PhoneNumberContext,
  ContactEmailContext
} from "../../providers/PrisonFormProvider";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

function PrisonDialogForm(props) {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");
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

  function handleChange(event) {
    setAge(event.target.value);
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
          <DialogTitle id="form-dialog-title">
            General Prisoner Info
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Name Of Worker"
              name="prisonName"
              value={prisonerName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Age"
              name="street"
              value={prisonerAge}
              onChange={handleChanges}
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">
                Gender
              </InputLabel>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleClickOpen}
                value={age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "demo-controlled-open-select"
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>

              <InputLabel htmlFor="demo-controlled-open-select">
                Permissions
              </InputLabel>
              <Select
                open={open}
                onClose={handleClose}
                onOpen={handleClickOpen}
                value={age}
                onChange={handleChange}
                inputProps={{
                  name: "age",
                  id: "demo-controlled-open-select"
                }}
              >
                <MenuItem value="male">Work In Prison Only</MenuItem>
                <MenuItem value="female">Permission for Work Leave</MenuItem>
              </Select>
            </FormControl>

            <DialogTitle id="form-dialog-title">Skills</DialogTitle>

            <TextField
              label="Summary(Cover Letter)"
              multiline
              rows="6"
              defaultValue="Default Value"
              className={classes.textField}
              margin="normal"
            />

            <TextField
              margin="dense"
              id="name"
              label="Skills"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Skills"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Skills"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Skills"
              name="contactName"
              value={contactName}
              onChange={handleChanges}
              fullWidth
            />

            <DialogTitle id="form-dialog-title">
              Previous Work Experience
            </DialogTitle>
            {/******************************************************************** First Previous Experience                   *********/}
            <TextField
              margin="dense"
              id="name"
              label="Company/Employer"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="City of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="State of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            {/******************************************************************** Second Previous Experience                   *********/}
            <TextField
              margin="dense"
              id="name"
              label="Company/Employer"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="City of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="State of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            {/******************************************************************** Third Previous Experience                   *********/}
            <TextField
              margin="dense"
              id="name"
              label="Company/Employer"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="City of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="State of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            {/******************************************************************** Fourth Previous Experience                   *********/}
            <TextField
              margin="dense"
              id="name"
              label="Company/Employer"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Position"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              id="date"
              label="Start Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="date"
              label="End Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              margin="dense"
              id="name"
              label="City of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="State of Employment"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />

            <TextField
              margin="dense"
              id="name"
              label="Duties"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChanges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Duties"
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
