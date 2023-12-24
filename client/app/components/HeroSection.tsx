const HeroSection = () => {
  return (
    <div className="w-full">
      <nav className="p-5 justify-between items-center bg-black w-full">
        <div></div>
        <div>
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[150px] lg:w-[200px] border-2 lg:border-4 border-primary"
          />
        </div>
        <div></div>
      </nav>
      <img src="/images/hero-banner.png" alt="hero" className="w-full" />
    </div>
  );
};

export default HeroSection;
