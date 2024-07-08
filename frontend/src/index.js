import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ChatProvider from "./Context/ChatProvider";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <ChatProvider>
        <App />
      </ChatProvider>
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
