import { Button, Divider } from "@nextui-org/react";
import { Dispatch, FC, SetStateAction } from "react";
import { PiXSquare } from "react-icons/pi";
import CartCard from "./CartCard";
import Link from "next/link";

interface CartSideBarProps {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const CartSideBar: FC<CartSideBarProps> = ({ isCartOpen, setIsCartOpen }) => {
  const items = true;

  return (
    <div
      className={`fixed top-0 w-[280px] right-0 h-full transition-all duration-300 z-50 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } bg-neutral-900 text-white px-4 pb-5`}
    >
      <div
        className={`w-full h-full relative pt-4
            flex flex-col gap-5 ${
              isCartOpen ? "opacity-100" : "opacity-0"
            } delay-300 transition-opacity duration-300 ease-out`}
      >
        <PiXSquare
          className="absolute top-3 right-3 text-4xl cursor-pointer text-primary"
          onClick={() => setIsCartOpen(false)}
        />
        <div className="uppercase font-semibold text-xl">Shopping cart</div>
        <Divider className="dark" />
        {items ? (
          <>
            <div
              className="w-full h-full flex flex-col items-center justify-start
              overflow-y-auto gap-2"
            >
              <CartCard image="/images/shirt.png" name="Shirt" price={100} />
              <CartCard
                image="/images/shirt.png"
                name="Shirt"
                price={100}
                size="s"
              />
            </div>
            <Divider className="dark" />
            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex justify-between px-1 text-xl font-semibold">
                <div>Subtotal</div>
                <div>$100</div>
              </div>
              <Link href="/checkout" className="w-full">
                <Button
                  className="dark py-3 bg-primary text-black text-md font-semibold
                  rounded-none uppercase w-full"
                >
                  Check out
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center overflow-y-auto">
            <img src="/images/rose.png" alt="shirt" className="w-full" />
            <div className="text-center text-lg">
              Your cart is currently empty.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSideBar;
