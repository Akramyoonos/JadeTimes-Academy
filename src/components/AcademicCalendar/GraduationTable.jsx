import React from "react";

const GraduationTable = () => {
  const graduations = [
    { campus: "NYFA New York", date: "TBD" },
    { campus: "NYFA Los Angeles", date: "TBD" },
    { campus: "NYFA Miami", date: "TBD" },
  ];

  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-16">
      {/* --- Title Section --- */}
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 border-l-4 h-15 border-purple-800 pl-6 mb-12">
        2025 GRADUATION
      </h2>

      {/* --- Table --- */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border border-gray-200 shadow-lg">
          <thead>
            <tr className="bg-black text-white text-left">
              <th className="px-6 py-4 font-semibold uppercase tracking-wide">
                Holiday
              </th>
              <th className="px-6 py-4 font-semibold uppercase tracking-wide">
                Dates
              </th>
            </tr>
          </thead>
          <tbody>
            {graduations.map((grad, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-700">{grad.campus}</td>
                <td className="px-6 py-4 text-gray-700">{grad.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Footer Note --- */}
      <div className="w-full px-4 mt-8 mb-24">
        <p className="text-base text-gray-600 leading-relaxed"> 
          <strong className="font-extrabold text-black">**</strong> Costs listed above do not include housing, food, transportation, books, additional necessary supplies or health insurance. Students will also incur<br /> 
          additional expenses on their own productions. These expenses will vary depending on the scale of their projects. For more information, please contact<br /> 
          our admissions team.
        </p>
      </div>
    </div>
  );
};

export default GraduationTable;
