import { Image } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="w-full h-[calc(100vw*(675/1500))] max-h-[576px] bg-black flex justify-center">
      <img
        src="/images/hero-banner.webp"
        alt="hero"
        className="w-full max-w-7xl"
      />
    </div>
  );
};

export default HeroSection;
