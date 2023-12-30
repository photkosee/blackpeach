import { FC } from "react";

interface ItemCardProps {
  image: string;
  name: string;
  price: number;
}

const ItemCard: FC<ItemCardProps> = ({ image, name, price }) => {
  return (
    <div className="flex flex-col gap-3 w-full px-3 mx-auto">
      <div className="w-full h-2/3">
        <img
          src="/images/shirt.png"
          alt="item"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center gap-1 text-center
        uppercase px-2 break-words font-semibold w-full text-xs sm:text-md"
      >
        <div className="w-full">{name}</div>
        <div className="w-full">${price}</div>
      </div>
    </div>
  );
};

export default ItemCard;
