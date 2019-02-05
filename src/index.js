import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserProvider from "./providers/UserProvider";
import PostProvider from "./providers/PostProvider";
import { PrisonFormProvider } from "./providers/PrisonFormProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <PrisonFormProvider>
      <PostProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </PostProvider>
    </PrisonFormProvider>
  </Router>,
  document.getElementById("root")
);
