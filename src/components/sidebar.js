"use client";
import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  let isOpenStyleBar = isOpen ? "w-[20rem]" : "w-0";
  let isOpenStyleBtn = isOpen ? "left-[20rem]" : "left-0";

  return (
    <div className="">
      <div
        className={`bg-sky-800 ${isOpenStyleBar} text-white  h-screen sticky top-0 transition-all duration-300 ease-in-out`}
      >
        {isOpen && (
          <>
            <div className="border-b-2  border-gray-500">
              <h3 className="pl-12 py-4">Hello, User</h3>
            </div>
            <div>
              <h4 className="pl-12 py-2 ">Disscussion Fourm</h4>
              <h4 className="pl-12 py-2 ">Market Stories</h4>
              <h4 className="pl-12 py-2 ">Market Stories</h4>
              <h4 className="pl-12 py-2 ">Sentiment</h4>
              <h4 className="pl-12 py-2 ">Market</h4>
              <h4 className="pl-12 py-2 ">Sector</h4>
              <h4 className="pl-12 py-2 ">Watchlist</h4>
              <h4 className="pl-12 py-2 ">Events</h4>
              <h4 className="pl-12 py-2 ">News/Interview</h4>
            </div>
          </>
        )}
        <button
          className={`absolute top-1/3 ${isOpenStyleBtn} h-20 w-6 text-white bg-sky-800 transition-all duration-300 ease-in-out`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <IoMdArrowDropleft className="text-3xl" />
          ) : (
            <IoMdArrowDropright className="text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
}
