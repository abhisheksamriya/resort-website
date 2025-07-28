"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const heroData = [
  {
    id: 1,
    image: "/images/goodvibe.jpg",
    text: "Welcome to Discover Resorts Karjat",
    paragraph: "Discover our world-class hotel & restaurant resort.",
  },
  {
    id: 2,
    image: "/images/bed1.jpg",
    text: "Discover Resorts Karjat",
    paragraph: "Best Hotel for Your Stay",
  },
  {
    id: 3,
    image: "/images/bed2.jpg",
    text: "Discover Resorts Karjat",
    paragraph: "Best Hotel for Your Stay",
  },
];

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

const HeroSlider = () => {
  return (
    <Carousel
      ssr={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      arrows={false}
      keyBoardControl={true}
    >
      {heroData.map((data) => (
        <div key={data.id} className="h-[70vh] sm:h-screen w-screen">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
            <Image
              src={data.image}
              alt="hero-img"
              width={1000}
              height={5000}
              className="h-full w-full object-cover"
            />
            <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="flex items-center justify-center flex-col w-full h-full">
                <div>
                  <h1 className="text-[24px] mb-4 mb:mb-0 text-center md:text-[35px] lg:text-[55px] tracking-tigher text-white font-bold">
                    {data.text}
                  </h1>
                  <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">
                    {data.paragraph}
                  </p>
                </div>
                <a
                  href="https://api.whatsapp.com/"
                  target="_blank"
                  className="rounded px-14 md:px-28 py-2.5 mt-8 overflow-hidden group bg-yellow-900 relative hover:bg-gradient-to-r hover:from-yellow-700 hover:to-yellow-900 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-800 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-50 ease"></span>
                  <span className="relative font-bold">Message Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSlider;
