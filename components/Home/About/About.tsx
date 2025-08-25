import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-white w-screen overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image Side */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative z-10 w-[90%] sm:w-[80%] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/bed1.jpg"
              alt="Hotel Room"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>
          <div className="absolute top-[-30px] left-[55%] w-[40%] sm:w-[50%] rounded-2xl overflow-hidden shadow-lg border-4 border-white z-20 hidden sm:block">
            <Image
              src="/images/bed2.jpg"
              alt="Luxury Room"
              width={300}
              height={200}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 left-4 sm:left-8 bg-white p-4 rounded-xl shadow-md flex items-center space-x-3 z-10">
            <div className="text-brown-600 text-3xl">⭐</div>
            <div>
              <p className="text-xl font-bold text-gray-900">50+</p>
              <p className="text-sm text-gray-600">Experienced Staff</p>
            </div>
          </div>
        </div>

        {/* Right Text Side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-yellow-900 text-lg font-semibold flex items-center justify-center lg:justify-start gap-2">
            <span className="text-xl">✦</span> About Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome To Our <br /> Discover Hotel & Resort
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Welcome to Bokinn, where luxury meets comfort in the heart of
            Canada. Since 1999, we have been dedicated to providing an
            exceptional stay for our guests, blending modern amenities with
            timeless elegance. Our beautifully designed rooms and suites offer
            stunning views and plush accommodations, ensuring a restful retreat
            whether you’re here for business or leisure.
          </p>
          <button className="mt-4 bg-brown-600 hover:bg-brown-700 text-black px-6 py-3 rounded-xl shadow-md transition duration-300 bg-yellow-800">
            Whatsapp us
          </button>
        </div>
      </div>
    </section>
  );
}
