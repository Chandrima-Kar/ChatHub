import React, { useState } from "react";
import Signup from "./SignUpPage";
import Login from "./LoginPage";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex bg-black"
        // style={{ backgroundImage: `url(/bg.jpg)` }}
      >
        <div className="container min-w-[1380px] flex justify-center items-center flex-col">
          <div className="text min-w-xl">
            <h1 className=" text-white font-semibold text-center text-4xl">
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
    </div>
  );
};

export default HomePage;
