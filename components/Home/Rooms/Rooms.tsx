import { packagesData } from "@/data/data";
import PackageCard from "./RoomCard";
import SectionHeading from "@/components/Helper/SectionHeading";

const Rooms = () => {
  return (
    <div
      id="rooms"
      className="pt-10 sm:pt-20 sm:pb-20 bg-white w-screen overflow-x-hidden"
    >
      <SectionHeading
        heading="Rooms & Suits"
        paragraph="Best Hotel Options for Your Accommodation"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {packagesData.map((data, i) => (
          <div key={data.id}>
            <PackageCard room={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
