/**@jsx jsx */
import React, { useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import PrisonDialogForm from "./components/Prison/PrisonDialogForm";
import PrisonPosts from "./components/Prison/PrisonPosts";
import { UserContext } from "./providers/UserProvider";
import { Route } from "react-router-dom";
import PrisonerApp from "./components/Prisoner/PrisonerApp";
import PrisonerDialogForm from "./components/Prisoner/PrisonerDialogForm";
import { css, jsx } from "@emotion/core";
import { makeStyles } from "@material-ui/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme } from "./theme";
import "./App.css";
const p = css`
  height: fit-content;
`;
const App = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      background: "#f3f5ed",
      height: "1200"
    }
  }));
  const classes = useStyles();

  const user = useContext(UserContext);
  return (
    <div className={classes.root} css={p}>
      <MuiThemeProvider theme={theme}>
        <NavBar />
        {user && <Route exact path="/" component={PrisonDialogForm} />}
        <Route exact path="/" component={PrisonPosts} />

        <Route
          exact
          path="/prisoner-posts/:id"
          render={props => <PrisonerApp {...props} />}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
