import Link from "next/link";

const CollectionSection = () => {
  return (
    <div
      className="w-full py-7 bg-white
      items-center flex justify-center flex-col gap-5"
    >
      <div className="text-2xl sm:text-3xl 2xl:text-5xl font-black uppercase text-black">
        COLLECTIONS
      </div>
      <div className="w-full flex flex-col gap-1 px-1">
        <div className="w-full flex flex-col sm:flex-row gap-1 sm:h-[27vw]">
          <Link
            href={"/collections/in-your-area"}
            passHref={true}
            className="w-full h-[47vw] sm:h-full overflow-hidden rounded-xl"
          >
            <div
              className="w-full h-full bg-[url('/images/area.webp')] bg-black bg-center bg-cover
              hover:scale-110 transition-transform duration-200"
            />
          </Link>
          <Link
            href={"/collections/the-album"}
            passHref={true}
            className="w-full h-[47vw] sm:h-full overflow-hidden rounded-xl"
          >
            <div
              className="w-full h-full bg-[url('/images/album.webp')] bg-black bg-center bg-cover
              hover:scale-110 transition-transform duration-200"
            />
          </Link>
        </div>
        <Link
          href={"/collections/born-pink"}
          passHref={true}
          className="w-full h-[47vw] sm:h-[27vw] overflow-hidden rounded-xl"
        >
          <div
            className="w-full h-full bg-[url('/images/born-big.webp')] bg-black bg-center bg-cover
            hover:scale-110 transition-transform duration-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default CollectionSection;
