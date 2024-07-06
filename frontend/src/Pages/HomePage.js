import React from "react";

const HomePage = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex"
        style={{ backgroundImage: `url(/bg.jpg)` }}
      >
        <div className="container justify-center items-center">
          <div className="text ">
            <h1 className="bg-white text-black font-semibold text-center">
              Welcome to ChatHub
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
