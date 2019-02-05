import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserProvider from "./providers/UserProvider";
import PostProvider from "./providers/PostProvider";
import { PrisonFormProvider } from "./providers/PrisonFormProvider";

ReactDOM.render(
  <PrisonFormProvider>
    <PostProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </PostProvider>
  </PrisonFormProvider>,
  document.getElementById("root")
);
