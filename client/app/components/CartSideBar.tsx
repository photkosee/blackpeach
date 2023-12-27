import { Divider } from "@nextui-org/react";
import { Dispatch, FC, SetStateAction } from "react";
import { PiXSquare } from "react-icons/pi";

interface CartSideBarProps {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const CartSideBar: FC<CartSideBarProps> = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <div
      className={`fixed top-0 w-[280px] right-0 h-full transition-all duration-300 z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } bg-neutral-900 text-white overflow-y-auto`}
    >
      <div className={`w-full h-full ${!isCartOpen && "hidden"}`}>
        <div
          className={`w-full h-full relative px-5 pt-4 pb-20
            flex flex-col gap-5 ${
              isCartOpen ? "opacity-100" : "opacity-0"
            } delay-500 transition-opacity duration-700 ease-out`}
        >
          <PiXSquare
            className="absolute top-3 right-3 text-4xl cursor-pointer text-primary"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="uppercase font-semibold text-xl">Shopping cart</div>
          <Divider className="dark" />
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
