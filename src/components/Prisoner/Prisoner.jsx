/**@jsx jsx */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { css, jsx } from "@emotion/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const prisonerIcon = css`
  height: 50px;
  width: 50px;
`;

const cardContainer = css`
  display: grid;
`;

const permission = css`
  font-size: 13px;
  color: red;
  text-align: center;
`;
const subContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const listContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  border: 1px solid #cdcdcd;
  border-bottom: none;
`;

const Prisoner = props => {
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 400
    },
    p: {
      textAlign: "center"
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    avatar: {
      height: 50,
      width: 50
    },

    title: {
      fontSize: 20,
      textDecoration: "underline"
    },
    subheader: {
      fontSize: 13
    },
    listIcon: {
      height: 15,
      width: 15
    },
    cardContent: {
      display: "grid"
    },
    subTit: {
      justifySelf: "center",
      textDecoration: "underline",
      marginBottom: 20,
      fontSize: 18,
      fontWeight: 800
    },
    summary: {
      paddingLeft: 80,
      paddingRight: 80,
      paddingTop: 20,
      textAlign: "justify",
      border: "1px solid #CDCDCD",
      borderBottom: "none",
      fontSize: 13
    },
    cardHeader: {
      borderBottom: "1px solid #CDCDCD"
    },
    h6: {
      fontSize: 15
    }
  }));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <Card className={classes.card}>
      <div css={cardContainer}>
        {/********************************************** Card Header ***************/}
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar
              aria-label="Recipe"
              className={classes.avatar}
              sizes="large"
            >
              <img
                src={require("../Images/p.png")}
                alt="avatar"
                css={prisonerIcon}
              />
            </Avatar>
          }
          title={
            <div css={subContainer}>
              <Typography className={classes.title}>{`${
                props.generalInfo.prisonerName
              }`}</Typography>

              <Typography component="p" css={permission}>
                {props.generalInfo.prisonerPermissions}
              </Typography>
            </div>
          }
          subheader={
            <Typography className={classes.subheader}>{`${
              props.generalInfo.prisonerAge
            } years old, ${props.generalInfo.prisonerGender}`}</Typography>
          }
        />

        {/****************************************************  Summary   **********************  */}
        <CardContent className={classes.cardContent}>
          <Typography component="p" variant="h6" className={classes.subTit}>
            Summary
          </Typography>
          <Typography component="p" className={classes.summary}>
            {props.skills.summary}
          </Typography>
          <br />
          {/*****************************************************************    Skill Section   */}
          <Typography variant="h6" className={classes.subTit}>
            {" "}
            Skills{" "}
          </Typography>

          <div css={listContainer}>
            {/********************************************************************* Skill 1 */}
            <List dense>
              <ListItem>
                <ListItemIcon dense>
                  <img
                    src={require("../Images/skill.png")}
                    alt="skill icon"
                    className={classes.listIcon}
                  />
                  <ListItemText className={classes.listText}>
                    <li>{props.skills.skill1}</li>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
              {/********************************************************************* Skill 2 */}

              <ListItem>
                <ListItemIcon dense>
                  <img
                    src={require("../Images/skill.png")}
                    alt="skill icon"
                    className={classes.listIcon}
                  />
                  <ListItemText className={classes.listText}>
                    <li>{props.skills.skill2}</li>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
            </List>
            {/********************************************************************* Skill 3 */}

            <List dense>
              <ListItem>
                <ListItemIcon dense>
                  <img
                    src={require("../Images/skill.png")}
                    alt="skill icon"
                    className={classes.listIcon}
                  />
                  <ListItemText className={classes.listText}>
                    <li>{props.skills.skill3}</li>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>

              {/********************************************************************* Skill 4 */}

              <ListItem>
                <ListItemIcon dense>
                  <img
                    src={require("../Images/skill.png")}
                    alt="skill icon"
                    className={classes.listIcon}
                  />
                  <ListItemText className={classes.listText}>
                    <li>{props.skills.skill4}</li>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
          {/******************************************************  Expand    *********************************/}
        </CardContent>
      </div>
      <CardActions className={classes.actions} disableActionSpacing>
        <Typography variant="h6">Previous Work Experience</Typography>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* ************************************************************      Previous Work Experience 1 *************     */}

        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Prisoner;
