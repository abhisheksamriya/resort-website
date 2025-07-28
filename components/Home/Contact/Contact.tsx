// components/ContactSection.jsx
import SectionHeading from "@/components/Helper/SectionHeading";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className=" bg-gray-100 py-20 px-6 md:px-12 w-screen overflow-x-hidden">
      <SectionHeading
        heading="Contact Us"
        paragraph="contact us for more information"
      />
      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Map Section */}
        <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3771.6264066399694!2d73.3281032!3d19.0361772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7f05058ca77c3%3A0x12fde07afced92ae!2sDiscover%20Resorts%20Karjat!5e0!3m2!1sen!2sin!4v1753699481830!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="bg-white/40 p-8 rounded-2xl shadow-xl border border-gray-200 flex flex-col justify-between min-h-[400px]">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Reach out to us for bookings, inquiries, or any assistance. We're
              here to help!
            </p>

            <ul className="space-y-6 text-gray-700 text-base">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-indigo-600 mt-1" />
                <span>
                  Damothe Village, Neral-Kalamb Road, Raigad Dist, Karjat
                  Taluka, Neral, Maharashtra 410101
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-indigo-600" />
                <span>+91 8069065624</span>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-indigo-600" />
                <span>test@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
