import { Image } from "@nextui-org/react";
import { FC } from "react";

interface TotalProductCardProps {
  name: string;
  image: string;
  price: number;
  quantity: number;
  size?: string;
}

const TotalProductCard: FC<TotalProductCardProps> = ({
  name,
  image,
  price,
  quantity,
}) => {
  return (
    <div className="w-full py-1 flex gap-x-2 justify-between">
      <div className="flex gap-x-2">
        <div className="w-20 h-22 rounded-lg border-1 border-gray-200">
          <Image
            src={image}
            radius="none"
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex items-center max-w-[150px] text-gray-700">
          {name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())}
        </div>
      </div>
      <div className="flex items-center text-gray-700">
        {quantity} x ${price.toFixed(2)}
      </div>
    </div>
  );
};

export default TotalProductCard;
