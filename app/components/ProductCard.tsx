import Link from "next/link";
import { FC } from "react";

export interface ProductProps {
  image: string;
  name: string;
  price: number;
}

const ProductCard: FC<ProductProps> = (product: ProductProps) => {
  return (
    <Link
      href={`/products/${product.name}`}
      className="flex flex-col gap-3 w-full px-3 mx-auto"
    >
      <div className="w-full h-2/3">
        <img
          src={product.image}
          alt="item"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center gap-1 text-center
        uppercase px-2 break-words font-semibold w-full text-xs sm:text-md"
      >
        <div className="w-full">{product.name}</div>
        <div className="w-full">${product.price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
