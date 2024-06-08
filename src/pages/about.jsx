import React from "react";
import Navbar from "../components/Navbar";
import keyfigimg from "../components/assets/Groupaboutus34452.svg";

const About = () => {
  return (
    <>
      <div className="bg-[#1FBA4A] text-white text-center h-[400px] pt-36">
        <p className="font-bold text-3xl">About Us</p>
        <p className="pt-4">Now operating across Nigeria</p>
      </div>
      <div>
        <p className="pt-48 flex justify-center text-green-500 text-3xl font-bold">
          Key Figures
        </p>
      </div>
      <div className="flex justify-center">
        <img src={keyfigimg} className="max-w-[1000px] h-[800px]" />
      </div>
      <div className="grid grid-cols-3 p-3 gap-5  pl-32 pr-32 items-center justify-between font-semibold pt-24 ">
        <div className="bg-[#1FBA4A] text-white  text-2xl shadow-2xl border text-center pointer:cursor rounded-lg p-5">
          <p>Our Vision</p>
        </div>
        <div className="text-2xl shadow-2xl border text-center pointer:cursor rounded-lg p-5">
          <p>Our Mission</p>
        </div>
        <div className="text-2xl shadow-2xl border text-center pointer:cursor rounded-lg p-5">
          <p>Our Values</p>
        </div>
      </div>
      <div>
        <p className="pt-48 pb-48 flex justify-center text-green-500 text-3xl font-bold">
          Executive Team
        </p>
      </div>
      <div className="grid grid-cols-3 pb-5">
        <div className="flex flex-col text-center items-center">
          <img />
          <p className="text-xl">John Philip</p>
          <p>Group Managing Director</p>
        </div>
        <div className="flex flex-col text-center items-center">
          <img />
          <p className="text-xl">John Philip</p>
          <p>Group Managing Director</p>
        </div>
        <div className="flex flex-col text-center items-center">
          <img />
          <p className="text-xl">John Philip</p>
          <p>Group Managing Director</p>
        </div>
      </div>
    </>
  );
};

export default About;
