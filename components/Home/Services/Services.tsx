import { FaBed, FaShieldAlt, FaSwimmer, FaChild } from "react-icons/fa";

export default function Services() {
  const facilities = [
    {
      icon: (
        <FaBed className="text-4xl text-yellow-900 mb-4 w-screen overflow-x-hidden" />
      ),
      title: "Rooms and Suites",
      description:
        "Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-900 mb-4" />,
      title: "24-Hour Security",
      description:
        "On-site security personnel and best surveillance. Secure storage for valuables.",
    },
    {
      icon: <FaChild className="text-4xl text-yellow-900 mb-4" />,
      title: "Kids Area",
      description:
        "A safe and fun space designed for children to play and enjoy. Includes games, toys, and supervised activities.",
    },
    {
      icon: <FaSwimmer className="text-4xl text-yellow-900 mb-4" />,
      title: "Swimming Pool",
      description:
        "Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="text-center mb-12 px-4">
        <p className="text-yellow-900 text-lg font-semibold flex justify-center items-center gap-2">
          <span className="text-xl">✦</span> Services{" "}
          <span className="text-xl">✦</span>
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
          Hotel Services
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300 flex flex-col justify-center items-center"
          >
            {facility.icon}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {facility.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {facility.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
