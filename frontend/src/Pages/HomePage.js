// src/Pages/HomePage.js

import React, { useEffect, useState } from "react";
import Signup from "../components/SignUp";
import Login from "../components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  const [activeTab, setActiveTab] = useState("login");

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex"
        // style={{ backgroundImage: `url(/bg.jpg)` }}
      >
        <div className="container min-w-[1380px] flex justify-center items-center flex-col">
          <div className="text min-w-xl">
            <h1 className="text-white font-semibold text-center text-4xl">
              Welcome to ChatHub
            </h1>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                className={`p-2 font-semibold ${
                  activeTab === "login"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`p-2 font-semibold ${
                  activeTab === "signup"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>
            <div className="mt-6 w-full max-w-md mx-auto">
              {activeTab === "login" ? <Login /> : <Signup />}
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default HomePage;
