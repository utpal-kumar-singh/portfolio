import React from "react";

export default function Education() {
  return (
    <section className="fade-animation py-14">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Education & Certifications
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">

        {/* B.Tech Section */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow border border-white/40">
          <h3 className="font-semibold text-lg text-gray-900">
            B.Tech — Computer Science & Engineering
          </h3>
          <p className="text-sm text-gray-700">
            IILM College of Engineering and Technology (2021–2025)
          </p>
        </div>

        {/* TCA Certificate Section */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow border border-white/40">
          <h3 className="font-semibold text-lg text-gray-900">
            The Complete Java (TCA) Certification
          </h3>
          <p className="text-sm text-gray-700">
            Successfully completed TCA Certification covering Java core, 
            OOP concepts, Collections, JDBC, Servlets, JSP, MVC architecture, 
            and hands-on full stack project development.
          </p>
        </div>

      </div>
    </section>
  );
}
