"use client";

import Link from "next/link";
import DropDown from "./DropDown";
import { PiShoppingCart } from "react-icons/pi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import MobileSideBar from "./MobileSideBar";
import CartSideBar from "./CartSideBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  closeCart,
  closeMenu,
  openCart,
  openMenu,
} from "../features/sidebars/sidebarSlice";

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
  const dispatch = useDispatch();
  const { isMenuOpen, isCartOpen } = useSelector(
    (state: RootState) => state.sidebar
  );
  const { data } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <MobileSideBar />

      <CartSideBar />

      <div
        className={`fixed top-0 left-0 h-full w-full z-40 ${
          isMenuOpen || isCartOpen
            ? "scale-100"
            : "scale-0 transition-all delay-700"
        }`}
        onClick={() => {
          dispatch(closeMenu());
          dispatch(closeCart());
        }}
      >
        <div
          className={`fixed top-0 left-0 h-full w-full z-40 ${
            isMenuOpen || isCartOpen ? "opacity-100" : "opacity-0"
          } backdrop-blur-sm transition-opacity duration-700 ease-out`}
        />
      </div>

      <div
        className="w-full sticky top-0 px-3 sm:px-7 xl:px-12 py-3 sm:py-5 z-30
        bg-black flex justify-between items-center shadow-lg"
      >
        <nav className="flex justify-between items-center w-full">
          <div className="hidden md:flex gap-1">
            <DropDown topic="Collections" items={collections} />
            <DropDown topic="Shop" items={shop} />
          </div>
          <button
            className="flex md:hidden text-primary p-2 transition-transform hover:translate-x-0.5"
            onClick={() => dispatch(openMenu())}
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
            className="relative text-primary text-[23px] md:text-[27px] lg:text-[35px]
            p-2 transition-transform hover:-translate-x-0.5"
            onClick={() => dispatch(openCart())}
          >
            {data.length > 0 && (
              <div
                className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full
             text-black text-xs font-semibold flex justify-center items-center"
              >
                {data.length}
              </div>
            )}
            <PiShoppingCart />
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
