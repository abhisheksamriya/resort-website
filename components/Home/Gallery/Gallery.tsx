import SectionHeading from "@/components/Helper/SectionHeading";
import Slider from "./Slider";

const Gallery = () => {
  return (
    <div
      id="services"
      className="pt-5 sm:pt-10 sm:pb-10 pb-5 bg-white w-screen overflow-x-hidden"
    >
      <SectionHeading
        heading="Gallery"
        paragraph="See all the best pictures of hotel"
      />
      <div className="mt-5 sm:w-[70%] w-[90%] mx-auto">
        <Slider />
      </div>
    </div>
  );
};

export default Gallery;
