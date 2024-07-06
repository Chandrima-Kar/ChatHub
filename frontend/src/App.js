import { Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
