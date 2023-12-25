import Link from "next/link";
import DropDown from "./DropDown";
import { PiShoppingCart } from "react-icons/pi";
import { RiBarChartHorizontalFill } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className="relative px-3 sm:px-5 xl:px-12 py-5 flex justify-between items-center bg-black w-full">
      <div className="hidden lg:flex">
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
      <div className="flex lg:hidden text-primary">
        <RiBarChartHorizontalFill className="text-[23px] md:text-[27px]" />
      </div>
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
        <PiShoppingCart className="text-[23px] md:text-[27px] lg:text-[35px]" />
      </div>
    </nav>
  );
};

export default NavBar;
