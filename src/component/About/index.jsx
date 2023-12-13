import React from "react";
import Work from "./work";

const About = () => {
  return (
    <div className="w-full bg-secondary-0 py-16">
      <div
        id="about"
        className="flex flex-col gap-4 sm:mx-4 md:mx-auto justify-center sm:w-[90%] md:w-[80%] lg:w-[70%] items-center"
      >
        <h2 className="text-lg lg:text-3xl md:text-2xl text-black font-semibold">
          About Me
        </h2>
        <Work />
      </div>
    </div>
  );
};

export default About;