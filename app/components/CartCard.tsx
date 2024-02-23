import { Button, Divider } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { FC, useState } from "react";

interface CartCardProps {
  image: string;
  name: string;
  price: number;
  size?: string;
}

const CartCard: FC<CartCardProps> = ({ image, name, price, size }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col gap-2 w-full px-3 mx-auto items-center justify-center">
      <div className="flex w-full justify-between items-center gap-1">
        <img
          src="/images/shirt.png"
          alt="item"
          className="w-1/2 h-full object-contain"
        />
        <div className="w-1/2 flex flex-col gap-1 items-start">
          <div className="text-white uppercase text-md font-semibold text-center">
            {name}
          </div>
          <div>${price}</div>
          {size && <div>Size: {size}</div>}
        </div>
      </div>
      <div className="w-full max-w-[110px] flex justify-between items-center">
        <Button
          isIconOnly
          size="sm"
          className="bg-primary text-black"
          onClick={() => setCount((prev) => prev - 1)}
        >
          <Minus className="w-4" />
        </Button>
        {count}
        <Button
          isIconOnly
          size="sm"
          className="bg-primary text-black p-1"
          onClick={() => setCount((prev) => prev + 1)}
        >
          <Plus className="w-4" />
        </Button>
      </div>
      <Divider className="dark" />
    </div>
  );
};

export default CartCard;
