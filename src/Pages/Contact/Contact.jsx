import React from "react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">

      {/* HERO */}
      <div
        className="bg-cover bg-center flex items-center min-h-[140px] sm:min-h-[160px] md:min-h-[200px] w-full px-4 sm:px-6 md:px-12 lg:px-20"
        style={{ backgroundImage: "url(/header_img.png)" }}
      >
        <div className="text-left text-white">

          {/* BREADCRUMB */}
          <div className="text-xs sm:text-sm flex items-center gap-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>{">"}</span>
            <span>Contact</span>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-2 text-[#C9A041]">
            Contact Us
          </h1>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-5 md:space-y-6 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#C9A041]">
              Get In Touch
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We are here to support you. Reach out to Lonnie Care Residential
              Treatment Center for inquiries, assistance, or more information
              about our services.
            </p>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <p>
                <span className="text-[#C9A041] font-semibold">Phone:</span>{" "}
                1-800-822-3525
              </p>

              <p>
                <span className="text-[#C9A041] font-semibold">Email:</span>{" "}
                admin@lonniecarertc.org
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200">

            <h3 className="text-lg sm:text-xl font-semibold text-[#C9A041] mb-6 text-center md:text-left">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-600 text-sm sm:text-base">

              <div>
                <p className="text-xs uppercase text-gray-500">Phone</p>
                <p className="text-base sm:text-lg font-medium text-gray-900">
                  1-800-822-3525
                </p>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500">Email</p>
                <p className="text-base sm:text-lg font-medium text-gray-900 break-words">
                  admin@lonniecarertc.org
                </p>
              </div>

              <div>
                <p className="text-xs uppercase text-gray-500">Availability</p>
                <p className="text-base text-gray-900">
                  24/7 Support Available
                </p>
              </div>

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

export default Contact;