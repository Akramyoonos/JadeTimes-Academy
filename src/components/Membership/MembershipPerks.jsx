import React from "react";
import icon1 from "../../assets/Images/facultyDataImages04.webp";
import icon2 from "../../assets/Images/facultyDataImages04.webp";
import icon3 from "../../assets/Images/facultyDataImages04.webp";

const MembershipPerks = () => {
  return (
    <div className="flex flex-col gap-8 px-0 pr-14 sm:px-6 md:px-6 lg:px-14 pt-10 pb-6 lg:flex-row">
    
      <div className="flex-1">
       
        {/* Perks Cards Grid */}
        <div className="grid grid-cols-1 gap-6 pl-20 md:grid-cols-3"> 


         <div className="flex flex-col items-center w-full p-6 text-center shadow-md bg-blue-50 rounded-xl sm:w-64 md:w-72">
         <img src={icon1} alt="Masterclass Icon" className="w-12 h-12 mb-4" />
         <h3 className="mb-2 text-lg font-bold">
          Monthly 1-hour, online masterclass
         </h3>
         <p className="text-sm text-gray-600">
         on various topics in one of the 10 disciplines of study offered at
         JIU. (No cost to JIU members)
         </p>
         </div>


          {/* Card 2: Workshops Discount */}
          <div className="flex flex-col items-center w-full p-6 text-center shadow-md bg-blue-50 rounded-xl sm:w-64 md:w-72">
            <img src={icon2} alt="Workshops Icon" className="w-12 h-12 mb-4" />
            <h3 className="mb-2 text-lg font-bold">
              20% off JIU Online Workshops*
            </h3>
            <p className="text-sm text-gray-600">
              for any online short-term workshops offered in 2025.
            </p>
          </div>

          {/* Card 3: Store Discount */}
          <div className="flex flex-col items-center w-full p-6 text-center shadow-md bg-blue-50 rounded-xl sm:w-64 md:w-72">
            <img src={icon3} alt="Store Icon" className="w-12 h-12 mb-4" />
            <h3 className="mb-2 text-lg font-bold">
              20% off one-time total purchase**
            </h3>
            <p className="text-sm text-gray-600">
              at the online JIU Store
            </p>
          </div>
        </div>

       
        {/* Notes */}
        <div className="pl-20 mt-10 text-xs leading-relaxed text-gray-600">
          <p className="mb-2">
            *The 20% tuition discount for short-term online workshops cannot be
            made retroactive. If you registered for a short-term online workshop
            prior to purchasing a JIU Membership, the discount will not apply.
          </p>
          <p>
            **The JIU Store discount for a one-time purchase is valid starting
            January 1, 2025.
          </p>
        </div>
      </div>



      
    </div>
  );
};

export default MembershipPerks;