import React from "react";

const NationalHolidays = () => {
  const holidays = [
    { name: "Martin Luther King, Jr. Day", date: "Monday, January 20th, 2025" },
    { name: "Good Friday*", date: "Friday, April 18th, 2025" },
    { name: "Memorial Day", date: "Monday, May 26th, 2025" },
    { name: "Juneteenth", date: "Thursday, June 19th, 2025" },
    { name: "Fourth of July", date: "Friday, July 4th, 2025" },
    { name: "Labor Day", date: "Monday, September 1st, 2025" },
     { name: "Rosh Hashanah", date: "Starts 5pm Monday, September 22nd, 2025 (All day Tuesday, September 23rd, 2025)" },
    { name: "Yom Kippur", date: "Starts 5pm Wednesday, October 1st, 2025 (All day Thursday, October 2nd, 2025)" },
    { name: "Veteran's Day", date: "Tuesday, November 11th, 2025" },
    { name: "Thanksgiving", date: "Thursday, November 27th, 2025" },
    { name: "Native American Heritage Day", date: "Friday, November 28th, 2025" },
    { name: "Christmas Day", date: "Thursday, December 25th, 2025" },
    { name: "New Year", date: "Thursday, January 1st, 2026" },
   
  ];

  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-16">
      {/* --- Title Section --- */}
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 border-l-4 border-purple-800 pl-6 mb-12 -mt-100">

        2025 NATIONAL <br /> HOLIDAYS
      </h2>

      {/* --- Table --- */}
      <div className="overflow-x-auto">
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
            {holidays.map((holiday, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-700">{holiday.name}</td>
                <td className="px-6 py-4 text-gray-700">{holiday.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* --- Note from Screenshot --- */}
      <p className="mt-4 text-sm text-gray-600">
        *Dates that only have an asterisk are days where some programs may have classes but others may not.
      </p>
    </div>
  );
};

export default NationalHolidays;
