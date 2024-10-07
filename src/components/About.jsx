import React from "react";
import Home from "./Home";

function About() {
  return (
    <div>
        <Home/>
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl text-blue-600 font-semibold">
          This is about us
        </h2>
      </div>
    </div>
  );
}

export default About;
