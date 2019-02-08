/**@jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserProvider from "./providers/UserProvider";
import PostProvider from "./providers/PostProvider";
import { PrisonFormProvider } from "./providers/PrisonFormProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { PrisonerFormProvider } from "./providers/PrisonerFormProvider";
import { css, jsx } from "@emotion/core";

ReactDOM.render(
  <Router>
    <PrisonFormProvider>
      <PrisonerFormProvider>
        <PostProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </PostProvider>
      </PrisonerFormProvider>
    </PrisonFormProvider>
  </Router>,
  document.getElementById("root")
);
