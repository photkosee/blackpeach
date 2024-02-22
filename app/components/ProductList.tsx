import { FC } from "react";
import { products } from "../storage";
import ProductCard from "./ProductCard";

const ProductList: FC<{ category: string }> = ({ category }) => {
  return (
    <div className="max-w-7xl grid grid-cols-2 lg:grid-cols-3">
      {products
        .filter((product) => product.categories.includes(category))
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
    </div>
  );
};

export default ProductList;
