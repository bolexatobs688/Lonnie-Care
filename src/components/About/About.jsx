import React from "react";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800 min-h-screen flex flex-col">
      
      {/* CONTENT */}
      <div className="flex-grow px-6 md:px-20 lg:px-32 pt-32 pb-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#C9A041]">
            About{" "}
            <span className="underline underline-offset-4">
              Lonnie Care RTC
            </span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Compassionate care, structured support, and a commitment to helping
            young adults heal, grow, and thrive.
          </p>
        </div>

        {/* ================= VISION ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          
          {/* IMAGE LEFT */}
          <div className="order-1 md:order-1">
            <div className="w-full h-[300px] bg-gray-300 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Vision Image</span>
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-semibold text-[#C9A041] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Lonnie Care RTC, our vision is to create a future where young
              adults who have experienced abuse, neglect, or trauma receive
              comprehensive, compassionate, and structured care that promotes
              healing and growth.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We are committed to providing a therapeutic environment that
              fosters behavioral stabilization, development of independent living
              skills, and advancement in social and educational functioning.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Through individualized treatment and supportive services, we equip
              each young adult with essential coping strategies and skills for
              long-term independence.
            </p>
          </div>
        </div>

        {/* ================= APPROACH (REVERSED ON MOBILE) ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          
          {/* IMAGE: order-1 (Top on mobile) | md:order-2 (Right on desktop) */}
          <div className="order-1 md:order-2">
            <div className="w-full h-[300px] bg-gray-300 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Approach Image</span>
            </div>
          </div>

          {/* TEXT: order-2 (Bottom on mobile) | md:order-1 (Left on desktop) */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-[#C9A041] mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our approach is individualized, structured, and multidisciplinary.
              We use a holistic, trauma-informed model addressing emotional,
              behavioral, and educational needs.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Through evidence-based practices and compassionate support, we
              guide young adults toward stability and growth.
            </p>

            <ul className="list-disc pl-5 mt-4 text-gray-600 space-y-2">
              <li>Individualized counseling and psychotherapy</li>
              <li>Group therapy and skill-building sessions</li>
              <li>Family engagement and intervention services</li>
              <li>Medication management and clinical oversight</li>
            </ul>
          </div>
        </div>

        {/* ================= TEAM ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE LEFT */}
          <div className="order-1 md:order-1">
            <div className="w-full h-[300px] bg-gray-300 rounded-xl flex items-center justify-center">
              <span className="text-gray-500">Team Image</span>
            </div>
          </div>

          {/* TEXT RIGHT */}
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-semibold text-[#C9A041] mb-4">
              Our Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our team consists of highly qualified professionals dedicated to
              compassionate and structured care.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We include therapists, counselors, social workers, and residential
              staff providing 24-hour support.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Together, we create a safe, supportive environment that empowers
              young adults toward independence and success.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default About;