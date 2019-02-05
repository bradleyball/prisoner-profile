import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import PrisonDialogForm from "./components/PrisonDialogForm";
import { PrisonPosts } from "./components/PrisonPosts";
import { UserContext } from "./providers/UserProvider";

const App = () => {
  const user = useContext(UserContext);
  return (
    <div className="App">
      <NavBar />
      {user && <PrisonDialogForm />}
      <PrisonPosts />
    </div>
  );
};

export default App;
