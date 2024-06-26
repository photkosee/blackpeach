import Link from "next/link";

const ShopSection = () => {
  return (
    <div className="w-full pt-7 pb-1 bg-white">
      <div
        className="w-full flex flex-col sm:flex-row gap-1 sm:h-[29vw]
        px-1"
      >
        <Link
          href="/shop/music"
          passHref
          className="relative overflow-hidden w-full h-[58vw] sm:h-full rounded-xl"
        >
          <div
            className="w-full bg-[url('/images/shop2.webp')] bg-black bg-cover h-full
            transition-transform duration-200 hover:scale-110"
          />
          <div className="absolute left-7 bottom-5 lg:bottom-10 text-primary font-bold uppercase">
            <div className="text-sm lg:text-lg">shop all</div>
            <div className="text-2xl sm:text-4xl 2xl:text-5xl">music</div>
          </div>
        </Link>
        <Link
          href="/shop/apparel"
          passHref
          className="relative overflow-hidden w-full h-[58vw] sm:h-full rounded-xl"
        >
          <div
            className="w-full bg-[url('/images/shop1.webp')] bg-black bg-cover h-full
            transition-transform duration-200 hover:scale-110"
          />
          <div className="absolute left-7 bottom-5 lg:bottom-10 text-primary font-bold uppercase">
            <div className="text-sm lg:text-lg">shop all</div>
            <div className="text-2xl sm:text-4xl 2xl:text-5xl">apparel</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopSection;
