/**@jsx jsx */
import React, { useContext, useState } from "react";
import { PostsContext } from "../../providers/PostProvider";
import PrisonPost from "./PrisonPost";
import Grid from "@material-ui/core/Grid";
import { css, jsx } from "@emotion/core";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  margin: {
    marginTop: 20
  }
};

const PrisonPosts = props => {
  const posts = useContext(PostsContext);
  const [editing2, setEditing2] = useState(false);
  const margin = css`
    margin-top: 70px;
  `;
  const { classes } = props;
  return (
    <Grid
      container
      spacing={10}
      justify="space-evenly"
      className={classes.margin}
    >
      {posts.map(post => (
        <Grid item>
          <PrisonPost
            className={classes.margin}
            editing2={editing2}
            setEditing2={setEditing2}
            {...post}
            key={post.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default withStyles(styles)(PrisonPosts);
