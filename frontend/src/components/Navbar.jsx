import React from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { PiCurrencyNgn } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { FaCreditCard, FaSortDown } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = ({ profile }) => {
  return (
    <div className="w-full bg-[#efefef] flex justify-between items-center px-8 pb-3 pt-4 shadow-md shadow-[#b5b5b5]">
      {/* Heading */}
      <div>
        <h1 className="text-[#0a512f] text-2xl tracking-tight font-bold">
          CREDIT APP
        </h1>
      </div>

      {/* User Icons */}
      {profile === "User" ? (
        <div className="flex gap-6 text-[#4d7f67] font-[600] text-lg">
          <div className="flex justify-center items-center gap-2 text-[#0a512f]">
            <IoIosSpeedometer className="text-2xl" />
            <h1>Home</h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <PiCurrencyNgn />
            <h1>Payments</h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaBook />
            <h1>Budget</h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaCreditCard />
            <h1>Card</h1>
          </div>
        </div>
      ) : null}

      {/* Profile and notification */}
      <div className={`flex gap-4 ${profile === "User" ? "text-[#4d7f67]" : "text-[#0a512f]"} font-[600] text-lg justify-center items-center`}>
        <BsBellFill />
        <AiFillMessage />
        <FaCircleUser />
        <h1>{profile}</h1>
        <FaSortDown className="mt-[-8px]" />
      </div>
    </div>
  );
};

export default Navbar;
