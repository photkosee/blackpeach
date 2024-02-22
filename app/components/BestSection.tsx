import { products } from "../storage";
import SwiperContainer from "./Swiper";

const BestSection = () => {
  return (
    <div
      className="w-full py-7 bg-white
      items-center flex justify-center flex-col gap-5"
    >
      <div className="text-2xl sm:text-3xl 2xl:text-5xl font-black uppercase">
        BEST SELLERS
      </div>
      <SwiperContainer products={products} />
    </div>
  );
};

export default BestSection;
