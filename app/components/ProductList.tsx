import { FC } from "react";
import { products } from "../storage";
import ProductCard from "./ProductCard";

const ProductList: FC<{ category: string }> = ({ category }) => {
  return (
    <div className="max-w-7xl grid grid-cols-2 lg:grid-cols-3 pt-2 pb-7 lg:pb-9">
      {products
        .filter((product) => product.categories.includes(category))
        .map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
    </div>
  );
};

export default ProductList;
