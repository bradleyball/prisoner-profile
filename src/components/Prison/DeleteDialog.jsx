import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { firestore } from "../../firebase";

const DeleteDialog = props => {
  const [open, setOpen] = useState(false);

  const deleteOpen = () => {
    setOpen(true);
  };

  const deleteClose = () => {
    setOpen(false);
  };

  const deletePost = () => {
    firestore.doc(`posts/${props.id}`).delete();
  };
  return (
    <div>
      <div className="edit-wrapper" onClick={deleteOpen}>
        <span className="edit-icon">delete</span>
        <img src={require("../Images/delete.png")} alt="delete" />
      </div>
      <Dialog
        open={open}
        onClose={deleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this post?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={deletePost} color="primary">
            Delete
          </Button>
          <Button onClick={deleteClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
