// src/App.js

import { Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import React from "react";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
