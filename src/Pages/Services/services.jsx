import React from "react";
import Footer from "../../components/footer/Footer";

const Services = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">

      {/* CONTENT WRAPPER */}
      <div className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-gray-900 leading-tight">
            Welcome to Lonnie Care Residential Treatment Center
          </h1>

          {/* MAIN CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

            {/* IMAGE (TOP ON MOBILE) */}
            <div className="order-1 md:order-2 mb-6 md:mb-0">
              <img
                src="/service.png"
                alt="Services"
                className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div className="order-2 md:order-1 space-y-5 sm:space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">

              <h2 className="text-xl sm:text-2xl font-semibold text-[#C9A041]">
                Young Adult Services – Lonnie Care RTC
              </h2>

              <p>
                Lonnie Care RTC provides comprehensive Young Adult Services designed
                to meet the fundamental needs of young adults in care. These services
                include safe housing, nutritious meals, appropriate clothing, and a
                supportive environment staffed by trained professionals.
              </p>

              <p>
                Our program emphasizes social development, personal health, proper
                supervision, and educational engagement with individualized care plans.
              </p>

              <p>
                We also provide therapeutic support including medication management,
                psychotherapy, and cognitive behavioral therapy (CBT).
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#C9A041] pt-4">
                Treatment Services – Lonnie Care RTC
              </h2>

              <ul className="list-disc pl-5 space-y-2">
                <li>GAF score of 50 or below</li>
                <li>Current DSM diagnosis</li>
                <li>History of self-injury</li>
                <li>Risk of harm to others</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 pt-2">
                Clinical Interventions
              </h3>
              <p>
                Weekly psychological and psychiatric care to support growth.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Multidisciplinary Review
              </h3>
              <p>
                Quarterly meetings to evaluate and adjust treatment plans.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Case Management
              </h3>

              <ul className="list-disc pl-5 space-y-2">
                <li>Ongoing assessments</li>
                <li>Service plans</li>
                <li>Care coordination</li>
                <li>Progress tracking</li>
              </ul>

            </div>

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-gray-300 pt-5">
        <Footer />
      </div>

    </div>
  );
};

export default Services;