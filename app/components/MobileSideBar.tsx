import { PiXSquare } from "react-icons/pi";
import CustomAccordion from "./CustomAccordion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { closeMenu } from "../features/sidebars/sidebarSlice";

const MobileSideBar = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state: RootState) => state.sidebar);

  return (
    <div
      className={`fixed lg:hidden top-0 left-0 w-[280px] h-full transition-all duration-300 z-50 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } bg-neutral-900 overflow-y-auto`}
    >
      <div className={`w-full h-full text-primary ${!isMenuOpen && "hidden"}`}>
        <div
          className={`w-full h-full relative px-12 pt-20 pb-28
            flex flex-col justify-start items-center ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            } delay-500 transition-opacity duration-700 ease-out`}
        >
          <PiXSquare
            className="absolute top-3 right-3 text-4xl cursor-pointer"
            onClick={() => dispatch(closeMenu())}
          />
          <CustomAccordion />
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
