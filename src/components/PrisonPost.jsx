/* eslint-disable default-case */
/**@jsx jsx */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import "./PrisonPosts.css";
import ContactDialog from "./ContactDialog";
import { UserContext } from "../providers/UserProvider";
import { jsx, css } from "@emotion/core";
import { firestore, auth } from "../firebase";
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
import DeleteDialog from "./DeleteDialog";
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    height: 100,
    width: 100
  },
  h4: {
    O: "white"
  }
};

function PrisonPost(props) {
  const currentUser = useContext(UserContext);
  const [editing, setEditing] = useState(false);

  const { prisonName, setPrisonName } = useContext(PrisonNameContext);
  const { street, setStreet } = useContext(StreetContext);
  const { pState, setPState } = useContext(PStateContext);
  const { city, setCity } = useContext(CityContext);
  const { zip, setZip } = useContext(ZipContext);
  const { contactName, setContactName } = useContext(ContactNameContext);
  const { phoneNumber, setPhoneNumber } = useContext(PhoneNumberContext);
  const { contactEmail, setContactEmail } = useContext(ContactEmailContext);

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

  const handleFormClose = () => {
    setEditing(false);
    props.setEditing2(false);
    setPrisonName("");
    setStreet("");
    setCity("");
    setPState("");
    setZip("");
    setContactName("");
    setPhoneNumber("");
    setContactEmail("");
  };

  const handlePrisonSubmit = event => {
    event.preventDefault();

    firestore.doc(`posts/${props.id}`).update({
      prisonName,
      prisonAddress: { street, pState, zip, city },
      prisonContact: { phoneNumber, contactEmail, contactName }
    });

    setEditing(!editing);
    props.setEditing2(!editing);
  };

  const editClick = () => {
    setEditing(true);
    props.setEditing2(true);
    setPrisonName(props.prisonName);
    setStreet(props.prisonAddress.street);
    setCity(props.prisonAddress.city);
    setPState(props.prisonAddress.pState);
    setZip(props.prisonAddress.zip);
    setContactName(props.prisonContact.contactName);
    setPhoneNumber(props.prisonContact.phoneNumber);
    setContactEmail(props.prisonContact.contactEmail);
  };

  const user = props.user;
  const belongsToCurrentUser = (currentUser, postAuthor) => {
    if (!currentUser) return false;
    return currentUser.uid === postAuthor.uid;
  };

  const marginStyle =
    !belongsToCurrentUser(currentUser, user) &&
    css`
      margin-top: 25px;
    `;

  const midDivStyle =
    !editing &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    `;
  const addressAndIcon = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
  `;
  const streetStyle = css`
    align-self: flex-end;
  `;
  const iconStyle = css`
    justify-self: flex-end;
  `;
  const submitButton = css`
    margin-top: 30px;
  `;

  const { classes } = props;
  return (
    <div css={marginStyle}>
      {!editing && !props.editing2 && belongsToCurrentUser(currentUser, user) && (
        <div className="edit-delete-container">
          <div className="edit-wrapper" onClick={() => editClick()}>
            <span className="edit-icon">edit</span>
            <img src={require("./Images/pedit.png")} alt="edit" />
          </div>
          <DeleteDialog id={props.id} />
        </div>
      )}

      <Card className={classes.card}>
        <form onSubmit={handlePrisonSubmit}>
          <div>
            {editing ? (
              <div>
                <span
                  className="close-icon"
                  onClick={() => {
                    handleFormClose();
                  }}
                >
                  Close
                  <img src={require("./Images/close.png")} alt="close" />
                </span>
                <TextField
                  margin="dense"
                  id="name"
                  label="Name Of Institution"
                  name="prisonName"
                  value={prisonName}
                  onChange={handleChanges}
                  fullWidth
                />{" "}
              </div>
            ) : (
              <CardHeader
                component="p"
                id="prison-post-header"
                color="inherit"
                align="center"
                title={props.prisonName}
              />
            )}
          </div>
          <CardContent>
            <div className="card-container">
              <div css={midDivStyle}>
                <div className="address-container">
                  {editing ? (
                    <>
                      <div css={addressAndIcon}>
                        <div css={streetStyle}>
                          <TextField
                            margin="dense"
                            id="street"
                            label="Street"
                            name="street"
                            value={street}
                            onChange={handleChanges}
                          />
                        </div>
                        <CardMedia
                          css={iconStyle}
                          component="img"
                          alt="profile icon"
                          className={classes.media}
                          image={require("./Images/p.png")}
                        />
                      </div>
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
                      />{" "}
                    </>
                  ) : (
                    <Typography gutterBottom variant="p" component="p">
                      <span className="address-text">
                        {props.prisonAddress.street}
                      </span>{" "}
                      <span className="address-text">
                        <br />
                        {props.prisonAddress.city},<span> </span>
                      </span>
                      <span className="address-text">
                        {props.prisonAddress.pState}{" "}
                      </span>
                      <span className="address-text">
                        {props.prisonAddress.zip}
                      </span>
                    </Typography>
                  )}
                  <div className="available-workers">
                    {!editing && (
                      <Typography component="p">
                        Available Workers: 1
                      </Typography>
                    )}
                  </div>
                </div>
                <div className="view-profile-container">
                  {!editing && (
                    <CardMedia
                      component="img"
                      alt="profile icon"
                      className={classes.media}
                      image={require("./Images/p.png")}
                    />
                  )}
                  <div className="space" />
                  {!editing && (
                    <Button
                      color="primary"
                      variant="raised"
                      size="small"
                      className="btn"
                    >
                      View Profile
                    </Button>
                  )}
                </div>
              </div>
              <div className="contact-info-container">
                <span className="span-container">
                  <span className="contact-info-header">Contact Info</span>

                  <ContactDialog {...props} />
                </span>
                {editing && (
                  <div>
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
                    <Button
                      css={submitButton}
                      color="primary"
                      variant="raised"
                      size="large"
                      className="btn"
                      onSubmit={handlePrisonSubmit}
                      type="submit"
                    >
                      Update
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}

export default withStyles(styles)(PrisonPost);
