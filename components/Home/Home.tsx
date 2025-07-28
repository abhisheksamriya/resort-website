"use client";

import About from "@/components/Home/About/About";
import Contact from "@/components/Home/Contact/Contact";
import Gallery from "@/components/Home/Gallery/Gallery";
import Hero from "@/components/Home/Hero/Hero";
import Review from "@/components/Home/Reviews/Reviews";
import Rooms from "@/components/Home/Rooms/Rooms";
import Services from "@/components/Home/Services/Services";
import VideoBanner from "@/components/Home/VideoPlayer/VideoBanner";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <VideoBanner />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;
