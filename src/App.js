import React, { Component } from "react";
import NavBar from "./components/NavBar";
import PrisonDialogForm from "./components/PrisonDialogForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PrisonDialogForm />
      </div>
    );
  }
}

export default App;
