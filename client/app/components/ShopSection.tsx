import Link from "next/link";

const ShopSection = () => {
  return (
    <div className="w-full pt-7 pb-2 xl:pb-3 bg-white">
      <div className="w-full flex flex-col sm:flex-row gap-2 xl:gap-3 sm:h-[29vw]">
        <Link
          href="/shop/music"
          passHref
          className="relative overflow-hidden w-full h-[58vw] sm:h-full"
        >
          <div
            className="w-full bg-[url('/images/shop2.png')] bg-cover h-full
            transition-transform duration-200 hover:scale-110"
          />
          <div className="absolute left-7 bottom-10 text-primary font-bold uppercase">
            <div className="text-sm lg:text-lg">shop all</div>
            <div className="text-2xl sm:text-4xl 2xl:text-5xl">music</div>
          </div>
        </Link>
        <Link
          href="/shop/apparel"
          passHref
          className="relative overflow-hidden w-full h-[58vw] sm:h-full"
        >
          <div
            className="w-full bg-[url('/images/shop1.png')] bg-cover h-full
            transition-transform duration-200 hover:scale-110"
          />
          <div className="absolute left-7 bottom-10 text-primary font-bold uppercase">
            <div className="text-sm lg:text-lg">shop all</div>
            <div className="text-2xl sm:text-4xl 2xl:text-5xl">apparel</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopSection;
