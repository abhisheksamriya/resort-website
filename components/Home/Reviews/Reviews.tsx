import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";
import SectionHeading from "@/components/Helper/SectionHeading";

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[url('/images/pattern.png')] w-screen overflow-x-hidden">
      <SectionHeading
        heading="Reviews"
        paragraph="check the reviews of our customers"
      />
      <div className="mt-5 w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-semibold text-black">
            What our customers are saying us?
          </h1>
          <p className="mt-6 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga non
            quia officiis quis repellendus quasi nam quas corporis dolores
            veritatis beatae nihil, esse qui natus quidem tempore soluta tenetur
            placeat.
          </p>
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-black">4.8</p>
              <p className="text-black mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-black" />
                <FaStar className="text-black" />
                <FaStar className="text-black" />
                <FaStar className="text-black" />
                <FaStar className="text-black" />
              </div>
              <div className="mt-6">
                <a
                  href="tel:910-###-####"
                  className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-gray-500 hover:bg-gray-600 transition-all duration-300 rounded-lg"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
