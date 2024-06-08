import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        {/* convert to links */}
        <div className="flex flex-row justify-between pb-4 font-semibold">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
          >
            <h1 className="pt-5 pl-3">GO-FUEL</h1>
          </div>
          <div className="flex flex-row space-x-10 pt-5">
            <div
              onClick={() => {
                navigate("/about");
              }}
              className="cursor-pointer"
            >
              About Us
            </div>
            <div
              onClick={() => {
                navigate("/gofuel");
              }}
              className="cursor-pointer"
            >
              GO-FUEL Program
            </div>
            <div
              onClick={() => {
                navigate("/contact");
              }}
              className="cursor-pointer"
            >
              Contact
            </div>
          </div>
          <h1 className="pt-5 pr-3">Order Now</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
