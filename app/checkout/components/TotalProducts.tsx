import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import TotalProductCard from "./TotalProductCard";
import { ProductCart } from "@/app/types";

const TotalProducts = () => {
  const { data, totalCost } = useSelector((state: RootState) => state.bp_cart);

  return (
    <div className="w-full max-w-lg h-full flex flex-col gap-y-3 divide-y-1 divide-black">
      <div className="w-full flex flex-col gap-y-1">
        {data.map((product: ProductCart, index: number) => (
          <TotalProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
      <div className="w-full flex flex-col gap-y-1 py-2">
        <div className="w-full flex justify-between text-gray-700 sm:text-lg">
          <div>Subtotal</div>
          <div>${totalCost.toFixed(2)}</div>
        </div>
        <div className="w-full flex justify-between text-black sm:text-lg">
          <div>Shipping & Handling</div>
          <div>$0.00</div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-1 py-2">
        <div className="w-full flex justify-between text-gray-700 text-lg sm:text-xl">
          <div>Total</div>
          <div>${totalCost.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default TotalProducts;
