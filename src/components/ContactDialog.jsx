/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import Fab from "@material-ui/core/Fab";

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};

const ContactDialog = props => {
  const [open, setOpen] = useState(false);
  const { classes } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="Add"
        className={`${classes.fab} prison-fab-button`}
        onClick={handleClickOpen}
        size="medium"
      >
        <AddIcon />
      </Fab>
      <Dialog aria-labelledby="simple-dialog-title" open={open}>
        <span className="close-icon" onClick={handleClose}>
          Close
          <img src={require("./Images/close.png")} alt="close" />
        </span>
        <DialogTitle id="simple-dialog-title">Contact Info</DialogTitle>
        <div>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <img
                    src={require("./Images/jobtitle.png")}
                    alt="Position:"
                    className="contact-image1"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={props.prisonContact.contactName} />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <img
                    src={require("./Images/phone.jpeg")}
                    alt="Position:"
                    className="contact-image2"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={props.prisonContact.phoneNumber} />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <img
                    src={require("./Images/email.jpeg")}
                    alt="Email:"
                    className="contact-image3"
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={props.prisonContact.contactEmail} />
            </ListItem>
          </List>
        </div>
      </Dialog>
    </div>
  );
};

export default ContactDialog;
