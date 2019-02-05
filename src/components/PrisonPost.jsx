/**@jsx jsx */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import "./PrisonPosts.css";
import ContactDialog from "./ContactDialog";
import { UserContext } from "../providers/UserProvider";
import { jsx, css } from "@emotion/core";

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

  const { classes } = props;
  return (
    <div css={marginStyle}>
      {belongsToCurrentUser(currentUser, user) && (
        <div className="edit-delete-container">
          <div className="edit-wrapper">
            <span className="edit-icon">edit</span>
            <img src={require("./Images/pedit.png")} alt="edit" />
          </div>
          <div className="edit-wrapper">
            <span className="edit-icon">delete</span>
            <img src={require("./Images/delete.png")} alt="delete" />
          </div>
        </div>
      )}
      <Card className={classes.card}>
        <div>
          <CardHeader
            component="p"
            id="prison-post-header"
            color="inherit"
            align="center"
            title={props.prisonName}
          />
        </div>
        <CardContent>
          <div className="card-container">
            <div className="mid-container">
              <div className="address-container">
                {" "}
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
                <div className="available-workers">
                  <Typography component="p">Available Workers: 1</Typography>
                </div>
              </div>
              <div className="view-profile-container">
                <CardMedia
                  component="img"
                  alt="profile icon"
                  className={classes.media}
                  image={require("./Images/p.png")}
                />
                <div className="space" />
                <Button
                  color="primary"
                  variant="raised"
                  size="small"
                  className="btn"
                >
                  View Profile
                </Button>
              </div>
            </div>
            <div className="contact-info-container">
              <span className="span-container">
                <span className="contact-info-header">Contact Info</span>

                <ContactDialog {...props} />
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(PrisonPost);
