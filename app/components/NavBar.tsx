"use client";

import Link from "next/link";
import DropDown from "./DropDown";
import { PiShoppingCart } from "react-icons/pi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { useState } from "react";
import MobileSideBar from "./MobileSideBar";
import CartSideBar from "./CartSideBar";

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
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <>
      <MobileSideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <CartSideBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

      <div
        className={`fixed top-0 left-0 h-full w-full z-40 ${
          isSidebarOpen || isCartOpen
            ? "scale-100"
            : "scale-0 transition-all delay-700"
        }`}
        onClick={() => {
          setIsSidebarOpen(false);
          setIsCartOpen(false);
        }}
      >
        <div
          className={`fixed top-0 left-0 h-full w-full z-40 ${
            isSidebarOpen || isCartOpen ? "opacity-100" : "opacity-0"
          } backdrop-blur-sm transition-opacity duration-700 ease-out`}
        />
      </div>

      <div
        className="w-full sticky top-0 px-3 sm:px-7 xl:px-12 py-3 sm:py-5 z-30
        bg-black flex justify-between items-center shadow-2xl"
      >
        <nav className="flex justify-between items-center w-full">
          <div className="hidden md:flex gap-1">
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
          <button
            className="text-primary text-[23px] md:text-[27px] lg:text-[35px]
            p-1 transition-transform hover:-translate-x-0.5"
            onClick={() => setIsCartOpen(true)}
          >
            <PiShoppingCart />
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
