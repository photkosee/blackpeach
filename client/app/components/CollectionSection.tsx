const CollectionSection = () => {
  return (
    <div
      className="w-full py-7 md:py-20 bg-white
      items-center flex justify-center flex-col gap-3"
    >
      <div className="text-2xl sm:text-3xl 2xl:text-5xl font-bold uppercase">
        COLLECTIONS
      </div>
      <div className="w-full flex flex-col gap-1 sm:gap-2 xl:gap-3">
        <div className="w-full flex flex-col sm:flex-row gap-1 sm:gap-2 xl:gap-3 sm:h-[29vw]">
          <div className="w-full bg-[url('/images/area.png')] bg-cover h-[58vw] sm:h-full" />
          <div className="w-full bg-[url('/images/album.png')] bg-cover h-[58vw] sm:h-full" />
        </div>
        <div className="w-full bg-[url('/images/born.png')] bg-cover h-[29vw]" />
      </div>
    </div>
  );
};

export default CollectionSection;
