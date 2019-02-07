/**@jsx jsx */
import React, { useState } from "react";
import Prisoner from "./Prisoner";
import { css, jsx } from "@emotion/core";
import Grid from "@material-ui/core/Grid";

const prisonersContainer = css`
  justify-content: center;
`;

const Prisoners = props => {
  const [prisonerPosts, setPrisonerPosts] = useState(props.prisonerPost);
  const [editing2, setEditing2] = useState(false);
  const handleExpandClick = () => {
    setEditing2(!editing2);
  };
  return (
    <Grid container css={prisonersContainer} spacing={20}>
      {props.prisonerPost.map(post => (
        <Grid item md={3} justify="center">
          {" "}
          <Prisoner {...post} editing2={editing2} setEditing2={setEditing2} />
        </Grid>
      ))}

      {console.log(prisonerPosts)}
    </Grid>
  );
};

export default Prisoners;
