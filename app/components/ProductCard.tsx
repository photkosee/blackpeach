import Link from "next/link";
import { FC } from "react";

import { ProductProps } from "../types";

const ProductCard: FC<ProductProps> = (product: ProductProps) => {
  const hasMultipleImages = product.images.length > 1;

  return (
    <Link
      href={`/products/${product.name}`}
      className="flex flex-col gap-2 w-full px-3 mx-auto relative"
    >
      <div className="w-full h-2/3">
        <img
          src={product.images[0]}
          alt="item"
          className={`w-full h-full object-cover`}
        />
      </div>
      <div
        className="flex flex-col justify-center items-center gap-1 text-center
        uppercase px-2 break-words font-semibold w-full text-xs sm:text-md 2xl:text-lg"
      >
        <div className="w-full">{product.name.replace(/-/g, " ")}</div>
        <div className="w-full">${product.price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
