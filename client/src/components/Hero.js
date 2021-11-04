import React from "react";
import HeroImg1 from "../images/herobg.jpg";
const Hero = () => {
  return (
    <div className="fixed w-screen h-screen flex justify-center">
      <div className="flex items-center flex-col justify-center flex-wrap">
        <img
          src={HeroImg1}
          className="md:object-fit object-cover md:mb-18 h-screen w-screen"
          alt="dog face"
        />
        <div className="text-center top-32 absolute justify-center ">
          <span className="text-3xl font-bold text-green-800">
            Let love change your world!
          </span>
          <span className="block font-bold text-xl text-green-800">
            Discover thousands of pets <br />
            waiting for loving homes
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
