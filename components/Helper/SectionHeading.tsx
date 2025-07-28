type props = {
  heading: string;
  paragraph?: string;
};

const SectionHeading = ({ heading, paragraph }: props) => {
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center">
      <h1 className="text-xl sm:text-5xl text-yellow-900 font-bold">
        {heading}
      </h1>
      <p className="mt-4 text-gray-700 sm:text-base text-sm font-medium">
        {paragraph || "Lorem ipsum dolor sit amet consectetur adipisicing elit"}
      </p>
    </div>
  );
};

export default SectionHeading;
