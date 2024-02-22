import { products } from "../storage";
import SwiperContainer from "./Swiper";

const NewSection = () => {
  return (
    <div className="bg-white w-full">
      <div
        className="w-full mx-auto md:px-15 py-7
        items-center flex justify-center flex-col gap-5"
      >
        <div className="text-2xl sm:text-3xl 2xl:text-5xl font-black uppercase">
          NEW ARRIVALS
        </div>
        <div className="w-full">
          <SwiperContainer products={products.slice(-7)} />
        </div>
      </div>
    </div>
  );
};

export default NewSection;
