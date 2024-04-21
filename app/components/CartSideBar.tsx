import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { Button, Divider, Image } from "@nextui-org/react";
import { PiXSquare } from "react-icons/pi";

import CartCard from "./CartCard";
import { RootState } from "../store";
import { ProductCart } from "../types";
import { closeCart } from "../features/sidebars/sidebarSlice";

const CartSideBar = () => {
  const dispatch = useDispatch();
  const { data, totalCost } = useSelector((state: RootState) => state.bp_cart);
  const { isCartOpen } = useSelector((state: RootState) => state.bp_sidebar);

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
          onClick={() => dispatch(closeCart())}
        />
        <div className="uppercase font-semibold text-xl">Shopping cart</div>
        <Divider className="dark" />
        {data.length > 0 ? (
          <>
            <div
              className="w-full h-full flex flex-col items-center justify-start
              overflow-y-auto gap-2"
            >
              {data.map((product: ProductCart, index: number) => (
                <CartCard
                  key={index}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                  size={product.size}
                />
              ))}
            </div>
            <div className="w-full flex flex-col gap-3">
              <Divider className="dark" />
              <div className="w-full flex justify-between px-1 text-xl font-semibold">
                <div>Subtotal</div>
                <div>${totalCost.toFixed(2)}</div>
              </div>
              <Link
                href="/checkout"
                className="w-full"
                onClick={() => dispatch(closeCart())}
              >
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
            <Image
              src="/images/rose.webp"
              alt="empty cart"
              className="w-full"
            />
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
