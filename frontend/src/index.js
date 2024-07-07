import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ChatProvider from "./Context/ChatProvider";

ReactDOM.render(
  <ChatProvider>
    <Router>
      <App />
    </Router>
  </ChatProvider>, // Correctly closing the ChatProvider tag
  document.getElementById("root")
);
