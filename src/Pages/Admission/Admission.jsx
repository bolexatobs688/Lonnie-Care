import React from "react";
import Footer from "../../components/footer/Footer";

const Admission = () => {
  return (
    <div className="bg-[#f9fafb] text-gray-800">

      {/* CONTENT WRAPPER */}
      <div className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20">

        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-gray-900 leading-tight">
          Admissions to Care – Lonnie Care RTC
        </h1>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">

          {/* IMAGE */}
          <div>
            <img
              src="/Admission.png"
              alt="Admission"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-5 sm:space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">

            <p>
              At Lonnie Care RTC, our Admissions Team carefully evaluates each
              referral to determine whether the needs of the young adult can be
              appropriately met within our program.
            </p>

            <p>
              Admission decisions are based on a comprehensive, multidisciplinary
              assessment to ensure proper placement and continuity of care.
            </p>

            <p>
              Each applicant is reviewed by a multidisciplinary team, and placement
              decisions are made following a thorough evaluation of:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Psychological assessments</li>
              <li>Social history</li>
              <li>Medical and psychiatric history</li>
              <li>Educational background</li>
              <li>Additional clinical or behavioral documentation</li>
            </ul>

            <p>
              Lonnie Care RTC provides services for female youth, ages 7 through 17,
              and accepts individuals requiring a Specialized or Intense Level of Care (LOC).
            </p>

            {/* SECTION */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#C9A041] pt-4">
              Population Served
            </h2>

            <p>
              We serve young adults who may present with a range of emotional,
              behavioral, and psychological needs, including:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Attention-Deficit/Hyperactivity Disorder (ADHD/ADD)</li>
              <li>Anxiety Disorders</li>
              <li>Depressive Disorders</li>
              <li>Impulse Control Disorders</li>
              <li>Oppositional Defiant Disorder (ODD)</li>
              <li>Learning and Developmental Disorders</li>
              <li>Maladaptive Behaviors</li>
            </ul>

            <p>As well as individuals who may exhibit:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Aggressive behaviors (verbal or physical)</li>
              <li>Assaultive or high-risk behaviors</li>
              <li>Behaviors posing a danger to self or others</li>
              <li>History of physical abuse, neglect, or trauma</li>
              <li>Sexual abuse history or sexualized behaviors</li>
              <li>Bullying or peer relational challenges</li>
            </ul>

            {/* SECTION */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#C9A041] pt-4">
              Commitment to Appropriate Placement
            </h2>

            <p>
              Lonnie Care RTC is committed to ensuring that each admission aligns
              with our program’s ability to provide safe, structured, and therapeutic care.
            </p>

            <p>
              All placement decisions are made with the goal of promoting stability,
              treatment progress, and long-term success for each young adult entrusted to our care.
            </p>

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

export default Admission;