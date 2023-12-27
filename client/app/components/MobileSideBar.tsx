import { Dispatch, FC, SetStateAction } from "react";
import { PiXSquare } from "react-icons/pi";
import CustomAccordion from "./CustomAccordion";

interface MobileSideBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileSideBar: FC<MobileSideBarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <div
      className={`fixed lg:hidden top-0 left-0 w-[280px] h-full transition-all duration-300 z-50 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } bg-neutral-900 overflow-y-auto`}
    >
      <div
        className={`w-full h-full text-primary ${!isSidebarOpen && "hidden"}`}
      >
        <div
          className={`w-full h-full relative px-12 pt-20 pb-28
            flex flex-col justify-start items-center ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            } delay-500 transition-opacity duration-700 ease-out`}
        >
          <PiXSquare
            className="absolute top-3 right-3 text-4xl cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
          <CustomAccordion setOpen={setIsSidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
