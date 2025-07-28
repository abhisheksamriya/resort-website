"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data.id} className="bg-white rounded-3xl block">
            <div className="w-[90%] sm:w-[80%] mx-auto mt-16">
              <p className="text-sm sm:text-lg font-semibold text-gray-800">
                {data.name}
              </p>
              <div className="flex items-center mt-2 mb-4">
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
              </div>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-600">
                {data.review}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
