const ShopSection = () => {
  return (
    <div
      className="w-full pt-7 pb-2 bg-white
      items-center flex justify-center flex-col gap-3"
    >
      <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-2 xl:gap-3 sm:h-[29vw]">
        <div className="relative w-full bg-[url('/images/shop2.png')] bg-cover h-[58vw] sm:h-full">
          <div className="absolute left-7 bottom-10 text-primary font-bold uppercase">
            <div className="text-sm lg:text-lg">shop all</div>
            <div className="text-2xl sm:text-4xl 2xl:text-5xl">music</div>
          </div>
        </div>
        <div className="relative w-full bg-[url('/images/shop1.png')] bg-cover h-[58vw] sm:h-full">
          <div className="absolute left-7 bottom-10 text-primary font-bold uppercase">
            <div className="text-sm lg:text-lg">shop all</div>
            <div className="text-2xl sm:text-4xl 2xl:text-5xl">apparel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
