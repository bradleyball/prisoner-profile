import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserProvider from "./providers/UserProvider";
import PostProvider from "./providers/PostProvider";

ReactDOM.render(
  <PostProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </PostProvider>,
  document.getElementById("root")
);
