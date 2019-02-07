/**@jsx jsx */
import React, { useState } from "react";
import Prisoner from "./Prisoner";
import { css, jsx } from "@emotion/core";
import Grid from "@material-ui/core/Grid";

const prisonersContainer = css`
  justify-content: space-evenly;
  padding-left: 5%;
  padding-right: 5%;
`;

const Prisoners = props => {
  const [prisonerPosts, setPrisonerPosts] = useState(props.prisonerPost);
  const [editing2, setEditing2] = useState(false);
  const handleExpandClick = () => {
    setEditing2(!editing2);
  };
  return (
    <Grid container css={prisonersContainer} spacing={40}>
      {props.prisonerPost.map(post => (
        <Grid item justify="center">
          {" "}
          <Prisoner
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

export default Prisoners;
