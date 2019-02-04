import React, { Component } from "react";
import NavBar from "./components/NavBar";
import PrisonDialogForm from "./components/PrisonDialogForm";
import { PrisonPosts } from "./components/PrisonPosts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PrisonDialogForm />
        <PrisonPosts />
      </div>
    );
  }
}

export default App;
