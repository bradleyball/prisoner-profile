import React from "react";
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
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <div>
        <CardHeader
          component="p"
          id="prison-post-header"
          color="inherit"
          align="center"
          title={props.prisonName}
        >
          <p>hey</p>
        </CardHeader>
      </div>
      <CardContent>
        <div className="card-container">
          <div className="mid-container">
            <div className="address-container">
              {" "}
              <Typography gutterBottom variant="p" component="p">
                <span>{props.prisonAddress.street}</span>{" "}
                <span>
                  <br />
                  {props.prisonAddress.city},<span> </span>
                </span>
                <span>{props.prisonAddress.pState} </span>
                <span>{props.prisonAddress.zip}</span>
              </Typography>
              <div className="available-workers">
                <Typography component="p">Available Workers: 1</Typography>
              </div>
              <div>
                <ContactDialog {...props} />
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
        </div>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(PrisonPost);
