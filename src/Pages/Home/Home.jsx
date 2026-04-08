import Footer from "../../components/footer/Footer";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">

      {/* HERO */}
      <Hero />
      {/* FOOTER */}
      <div className="border-t border-gray-200 pt-5">
        <Footer />
      </div>

    </div>
  );
};

export default Home;