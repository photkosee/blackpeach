"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@nextui-org/react";
import { Minus, Plus, Trash2 } from "lucide-react";

import { closeCart } from "../features/sidebars/sidebarSlice";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../features/carts/cartSlice";

interface CartCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  size?: string;
  quantity?: number;
}

const CartCard: FC<CartCardProps> = ({
  id,
  image,
  name,
  price,
  size,
  quantity,
}) => {
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col gap-2 w-full px-3 py-1 mx-auto items-center justify-center
      bg-neutral-700 rounded-lg"
    >
      <div className="flex w-full justify-between items-center gap-1">
        <img src={image} alt="item" className="w-1/2 h-full object-contain" />
        <div className="w-1/2 flex flex-col gap-1 items-start">
          <Link
            href={`/products/${name.toLowerCase()}`}
            className="text-white uppercase text-sm font-semibold text-start"
            onClick={() => dispatch(closeCart())}
          >
            {name
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </Link>
          <div>${price}</div>
          {size && <div>Size: {size}</div>}
        </div>
      </div>
      <div className="font-semibold text-lg text-primary flex divide-x-1 divide-neutral-700">
        <div
          className="h-full flex items-center p-1"
          role="button"
          onClick={() => dispatch(removeItem({ id: id }))}
        >
          <Trash2 size={20} />
        </div>
        <div className="text-center bg-black w-8">{quantity}</div>
        <Button
          isIconOnly
          size="sm"
          className="bg-black rounded-none"
          onClick={() => dispatch(decreaseQuantity({ id: id, quantity: 1 }))}
        >
          <Minus className="w-4 text-primary" />
        </Button>
        <Button
          isIconOnly
          size="sm"
          className="bg-black rounded-none"
          onClick={() => dispatch(increaseQuantity({ id: id, quantity: 1 }))}
        >
          <Plus className="w-4 text-primary" />
        </Button>
      </div>
    </div>
  );
};

export default CartCard;
