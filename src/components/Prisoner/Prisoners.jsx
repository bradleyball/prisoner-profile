/**@jsx jsx */
import React, { useState } from "react";
import Prisoner from "./Prisoner";
import { css, jsx } from "@emotion/core";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const prisonersContainer = css`
  margin-top: 10%;
`;
const gridCont = css`
  display: grid;
  justify-content: center;
  justify-items: center;
`;

const styles = {
  margin: {
    marginTop: 100
  }
};

const Prisoners = props => {
  const [prisonerPosts, setPrisonerPosts] = useState(props.prisonerPost);
  const [editing2, setEditing2] = useState(false);
  const handleExpandClick = () => {
    setEditing2(!editing2);
  };
  const { classes } = props;
  return (
    <Grid
      className={classes.margin}
      container
      spacing={40}
      justify="space-evenly"
      css={prisonersContainer}
    >
      {props.prisonerPost.map(post => (
        <Grid item className={classes.margin}>
          {" "}
          <Prisoner
            className={classes.margin}
            {...post}
            postId={props.postId}
            editing2={editing2}
            setEditing2={setEditing2}
            dialogClick={props.dialogClick}
          />
        </Grid>
      ))}

      {console.log(prisonerPosts)}
    </Grid>
  );
};

export default withStyles(styles)(Prisoners);
