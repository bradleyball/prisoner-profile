import React, { useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import PrisonDialogForm from "./components/Prison/PrisonDialogForm";
import { PrisonPosts } from "./components/Prison/PrisonPosts";
import { UserContext } from "./providers/UserProvider";
import { Route } from "react-router-dom";
import PrisonerApp from "./components/Prisoner/PrisonerApp";
import PrisonerDialogForm from "./components/Prisoner/PrisonerDialogForm";

const App = () => {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <NavBar />

      {user && <Route exact path="/" component={PrisonDialogForm} />}
      <Route exact path="/" component={PrisonPosts} />

      <Route
        exact
        path="/prisoner-posts/:id"
        render={props => <PrisonerDialogForm {...props} />}
      />
    </div>
  );
};

export default App;
