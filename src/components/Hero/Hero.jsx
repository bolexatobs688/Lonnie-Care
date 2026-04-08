import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/image1.jpg.png",
  "/image2.jpg.png",
  "/image3.jpg.png",
  "/image4.jpg.png",
  "/image5.jpg.png",
  "/image6.jpg.png",
  "/image7.jpg.png",
  "/image8.jpg.png",
  "/image9.jpg.png",
  "/image10.jpg.png",
  "/image11.jpg.png",
  "/image12.jpg.png",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((index + 1) % images.length);
      setIsTransitioning(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // match animation duration
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center 
    bg-gradient-to-b from-gray-100 via-white to-gray-200">

      {/* IMAGE CONTAINER (UNCHANGED SIZE) */}
      <div className="w-[90%] max-w-xl h-64 md:h-80 perspective mb-12 relative overflow-hidden">

        {/* CURRENT IMAGE */}
        <img
          src={images[index]}
          alt=""
          className={`absolute w-full h-full object-cover rounded-2xl shadow-2xl
          transition-all duration-1000 ease-in-out
          ${isTransitioning ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}
        />

        {/* NEXT IMAGE */}
        <img
          src={images[nextIndex]}
          alt=""
          className={`absolute w-full h-full object-cover rounded-2xl shadow-2xl
          transition-all duration-1000 ease-in-out
          ${isTransitioning ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
        />

      </div>

      {/* TEXT (UNCHANGED) */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-wide">
        Lonnie Care
      </h1>

      <h2 className="text-gray-600 text-lg md:text-xl mb-8">
        Giving Young Adults a Brighter Future
      </h2>

      {/* BUTTONS (UNCHANGED) */}
      <div className="flex gap-4 flex-wrap justify-center">

        <Link
          to="/services"
          className="flex items-center gap-3 px-7 py-3 rounded-full 
          bg-green-600 text-white group hover:bg-green-700 transition shadow-md"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          Get Started Today
          <span className="w-6 h-[2px] bg-white"></span>
        </Link>

        <Link
          to="/about"
          className="flex items-center gap-3 px-7 py-3 rounded-full 
          border border-green-600 text-green-700 group hover:bg-green-600 hover:text-white transition shadow-sm"
        >
          <span className="w-6 h-[2px] bg-green-600 group-hover:bg-white"></span>
          Learn More
          <span className="w-6 h-[2px] bg-green-600 group-hover:bg-white"></span>
        </Link>

      </div>

    </section>
  );
};

export default Hero;