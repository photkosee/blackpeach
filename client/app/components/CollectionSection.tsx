import Link from "next/link";

const CollectionSection = () => {
  return (
    <div
      className="w-full py-7 md:py-20 bg-white
      items-center flex justify-center flex-col gap-5"
    >
      <div className="text-2xl sm:text-3xl 2xl:text-5xl font-bold uppercase">
        COLLECTIONS
      </div>
      <div className="w-full flex flex-col gap-1 sm:gap-2 xl:gap-3">
        <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-2 xl:gap-3 sm:h-[27vw]">
          <Link
            href={"/in-your-area"}
            passHref={true}
            className="w-full h-[47vw] sm:h-full overflow-hidden"
          >
            <div
              className="w-full h-full bg-[url('/images/area.png')] bg-center bg-cover
              hover:scale-110 transition-transform duration-200"
            />
          </Link>
          <Link
            href={"/the-album"}
            passHref={true}
            className="w-full h-[47vw] sm:h-full overflow-hidden"
          >
            <div
              className="w-full h-full bg-[url('/images/album.png')] bg-center bg-cover
              hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </div>
        <Link
          href={"/born-pink"}
          passHref={true}
          className="w-full h-[47vw] sm:h-[27vw] overflow-hidden"
        >
          <div
            className="w-full h-full bg-[url('/images/born-big.png')] bg-center bg-cover
            hover:scale-110 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default CollectionSection;
