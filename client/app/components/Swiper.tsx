"use client";

import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ItemCard from "./ItemCard";
import { useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const SwiperContainer = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="px-10 w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, Navigation, A11y, Pagination]}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 2,
          },
          730: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={5}
        loop={true}
        className="relative max-w-7xl"
      >
        <SwiperSlide>
          <ItemCard
            image="/images/hero-banner.png"
            name="asdfsadfasdfasdsadfasdfasdfsadf asdfsdf"
            price={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard
            image="/images/hero-banner.png"
            name="asdfsadfasdfasdsadfasdfasdfsadf asdfsdf"
            price={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard
            image="/images/hero-banner.png"
            name="asdfsadfasdfasdsadfasdfasdfsadf asdfsdf"
            price={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard
            image="/images/hero-banner.png"
            name="asdfsadfasdfasdsadfasdfasdfsadf asdfsdf"
            price={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ItemCard
            image="/images/hero-banner.png"
            name="asdfsadfasdfasdsadfasdfasdfsadf asdfsdf"
            price={500}
          />
        </SwiperSlide>
        <button
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          className="text-white bg-black h-7 w-7 flex items-center justify-center pl-1
          absolute top-1/2 left-0 -translate-y-1/2 rounded-full z-20"
        >
          <MdArrowBackIos />
        </button>
        <button
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          className="text-white bg-black h-7 w-7 flex items-center justify-center pl-1
          absolute top-1/2 right-0 -translate-y-1/2 rounded-full z-20"
        >
          <MdArrowForwardIos />
        </button>
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
