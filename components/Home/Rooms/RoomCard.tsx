import { FaHeart } from "react-icons/fa";

type Props = {
  room: {
    id: number;
    image: string;
    name: string;
    paragraph: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const RoomCard = ({ room }: Props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col ">
          <FaHeart className="w-3 h-3" />
        </div>
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <img
          src={room.image}
          alt={room.name}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
        />
      </div>
      <div>
        <h1 className="mt-4 text-lg font-semibold text-yellow-950 hover:text-black cursor-pointer transition-all duration-200">
          {room.name}
        </h1>
        <p className="text-sm text-gray-600 mt-2 font-medium mb-6">
          {room.paragraph}
        </p>
        <div className="flex items-center space-x-2">
          <div className="px-2 py-2 bg-yellow-800 rounded-md font-bold text-white text-xs">
            {room.rating}
          </div>
          <p className="text-sm text-gray-800">Exceptional</p>
          <p className="text-sm font-bold text-gray-800">
            {room.reviews} Reviews
          </p>
        </div>
        <p className="mt-2 text-gray-700 font-medium">
          Starting from{" "}
          <span className="text-yellow-600 font-bold">INR {room.price}</span>
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
