"use client";

import Link from "next/link";
import DropDown from "./DropDown";
import { PiShoppingCart, PiXSquare } from "react-icons/pi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { useState } from "react";
import CustomAccordion from "./CustomAccordion";

const collections = [
  {
    name: "In Your Area",
    link: "/collections/in-your-area",
  },
  {
    name: "The Album",
    link: "/collections/the-album",
  },
  {
    name: "Born Pink",
    link: "/collections/born-pink",
  },
];

const shop = [
  {
    name: "Music",
    link: "/shop/music",
  },
  {
    name: "Apparel",
    link: "/shop/apparel",
  },
];

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`fixed lg:hidden top-0 h-full transition-all duration-300 z-50 ${
          isSidebarOpen ? "w-[280px]" : "w-0"
        } bg-neutral-900 text-white`}
      >
        <div
          className="w-full h-full relative flex flex-col justify-start items-center
          px-12 pt-28 pb-20 text-primary hidden"
        >
          <PiXSquare
            className="absolute top-5 right-5 text-4xl cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
          <CustomAccordion />
        </div>
      </div>

      <div
        className={`fixed lg:hidden top-0 left-0 h-full w-full z-40 ${
          isSidebarOpen ? "scale-100" : "scale-0 transition-all delay-700"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`fixed lg:hidden top-0 left-0 h-full w-full z-40 ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          } backdrop-blur-[2.3px] transition-opacity duration-700 ease-out`}
        />
      </div>

      <div
        className="w-full sticky top-0 px-3 sm:px-7 xl:px-12 py-3 sm:py-5 z-30
        bg-black flex justify-between items-center shadow-2xl"
      >
        <nav className="flex justify-between items-center w-full">
          <div className="hidden md:flex">
            <DropDown topic="Collections" items={collections} />
            <DropDown topic="Shop" items={shop} />
          </div>
          <button
            className="flex md:hidden text-primary p-1 transition-transform hover:translate-x-0.5"
            onClick={() => setIsSidebarOpen(true)}
          >
            <RiBarChartHorizontalFill className="text-[23px] md:text-[27px]" />
          </button>
          <Link
            href="/"
            passHref
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[150px] lg:w-[200px] border-2 lg:border-4 border-primary"
            />
          </Link>
          <div className="text-primary">
            <PiShoppingCart className="text-[23px] md:text-[27px] lg:text-[35px] cursor-pointer" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
