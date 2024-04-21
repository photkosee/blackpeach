import { Image } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[calc(675px*(100vw/1500px)] bg-black flex justify-center">
      <img
        src="/images/hero-banner.webp"
        alt="hero"
        className="w-full max-w-7xl"
      />
    </div>
  );
};

export default HeroSection;
