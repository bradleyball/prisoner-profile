import React, { useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import PrisonDialogForm from "./components/Prison/PrisonDialogForm";
import { PrisonPosts } from "./components/Prison/PrisonPosts";
import { UserContext } from "./providers/UserProvider";
import { Route } from "react-router-dom";
import PrisonerApp from "./components/Prisoner/PrisonerApp";

const App = () => {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <NavBar />
      {user && <Route exact path="/" component={PrisonDialogForm} />}
      <Route exact path="/" component={PrisonPosts} />
      <Route path="/prison-profile" component={PrisonerApp} />
    </div>
  );
};

export default App;
