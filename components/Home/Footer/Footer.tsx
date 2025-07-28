import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-black w-screen">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-4 gap-10">
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Discover Resorts </h1>
          <p className="font-medium cursor-pointer text-sm">Home</p>
          <p className=" font-medium cursor-pointer text-sm">About Us</p>
          <p className=" font-medium cursor-pointer text-sm">Rooms</p>
          <p className=" font-medium cursor-pointer text-sm">Services</p>
          <p className=" font-medium cursor-pointer text-sm">Contact Us</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className=" font-medium cursor-pointer text-sm">Contact</p>
          <p className=" font-medium cursor-pointer text-sm">Legal Notice</p>
          <p className=" font-medium cursor-pointer text-sm">Privacy Policy</p>
          <p className=" font-medium cursor-pointer text-sm">
            Terms & Condition
          </p>
          <p className=" font-medium cursor-pointer text-sm">Sitemap</p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Services</h1>
          <p className=" font-medium cursor-pointer text-sm">Rooms & Suits</p>
          <p className=" font-medium cursor-pointer text-sm">Kids Play Area</p>
          <p className=" font-medium cursor-pointer text-sm">Swimming Pool</p>
          <p className=" font-medium cursor-pointer text-sm">24h Security</p>
          <p className=" font-medium cursor-pointer text-sm">Hotel Bookings</p>
        </div>
        <div id="contact">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-300">Our Contact</h1>
            <h1 className="text-base fon mt-1">+91 8069065624</h1>
            <h1 className="text-base fon mt-1">test@gmail.com</h1>
          </div>
          <div className="mt-3">
            <h1 className="text-sm text-gray-300">Our Address</h1>
            <h1 className="text-base fon mt-1">
              Damothe Village, Neral-Kalamb Road, Raigad Dist, Karjat Taluka,
              Neral, Maharashtra 410101
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-8 w-[80%] mx-auto border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
        <p className="text-center md:text-left">
          Copyright @ 2025 | Developed By Abhishek with ❤️
        </p>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <span>Socials : </span>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="text-gray-500 hover:"
          >
            <FaFacebook className="h-5 w-5 " />
          </a>
          <a
            href="https://api.whatsapp.com/"
            target="_blank"
            className="text-gray-500 hover:"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>{" "}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="text-gray-500 hover:"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
