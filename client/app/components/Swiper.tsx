"use client";

import Autoplay from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperContainer = () => {
  return (
    <Swiper
      grabCursor={true}
      autoplay={{
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        468: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
        768: {
          spaceBetween: 15,
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 15,
          slidesPerView: 4,
        },
        1280: {
          spaceBetween: 30,
          slidesPerView: 5,
        },
      }}
      loop={true}
      centeredSlides={true}
      navigation
      className="h-40 w-full px-7"
    >
      <SwiperSlide>
        <div className="w-full flex items-center flex-col gap-2">
          <div></div>
          <div className="text-lg font-semibold text-center break-words w-full">
            asdfsadfasdfasdfsadfsadfasdfasdfasdfsadfsdfasdfsadf
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex items-center flex-col gap-2">
          <div></div>
          <div className="text-lg font-semibold text-center break-words w-full">
            asdfsadfasdfasdfsadfsadfasdfasdfasdfsadfsdfasdfsadf
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex items-center flex-col gap-2">
          <div></div>
          <div className="text-lg font-semibold text-center break-words w-full">
            asdfsadfasdfasdfsadfsadfasdfasdfasdfsadfsdfasdfsadf
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex items-center flex-col gap-2">
          <div></div>
          <div className="text-lg font-semibold text-center break-words w-full">
            asdfsadfasdfasdfsadfsadfasdfasdfasdfsadfsdfasdfsadf
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperContainer;
