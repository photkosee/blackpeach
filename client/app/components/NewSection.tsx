import SwiperContainer from "./Swiper";

const NewSection = () => {
  return (
    <div className="bg-white w-full">
      <div
        className="w-[calc(85%)] mx-auto px-10 sm:px-5 md:px-15 py-7
        items-center flex justify-center flex-col gap-5 max-w-7xl"
      >
        <div className="text-2xl sm:text-3xl 2xl:text-5xl font-black uppercase">
          NEW ARRIVALS
        </div>
        <div className="w-full">
          <SwiperContainer />
        </div>
      </div>
    </div>
  );
};

export default NewSection;
