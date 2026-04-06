import Footer from "../../components/footer/Footer";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">

      {/* HERO */}
      <Hero />

      {/* OPTIONAL SPACING / FUTURE SECTIONS */}
      <div className="py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* You can add sections here later */}
      </div>

      {/* FOOTER */}
      <div className="border-t border-gray-200 pt-5">
        <Footer />
      </div>

    </div>
  );
};

export default Home;