import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const TotalProducts = () => {
  const { data } = useSelector((state: RootState) => state.bp_cart);

  return <div className="w-full h-full border-2 border-black">asdfasdf</div>;
};

export default TotalProducts;
