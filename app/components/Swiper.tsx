"use client";

import { FC, useRef } from "react";

import { Autoplay, A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import ProductCard from "./ProductCard";
import { ProductProps } from "../types";

const SwiperContainer: FC<{ products: ProductProps[] }> = ({ products }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="px-10 w-full min-h-[200px]">
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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
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
