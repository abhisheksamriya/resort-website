"use client";
import { gallery } from "@/data/data";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {gallery.map((data) => (
        <div key={data.id} className="m-3">
          <div className="relative h-[600px]">
            <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
            <img
              src={data.image}
              alt="hotel image"
              width={1000}
              height={500}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
