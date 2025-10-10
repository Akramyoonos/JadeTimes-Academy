import React from "react";
import MicIcon from "../../assets/Images/icon-guest-speakers-m.webp";
import AdamDriver from "../../assets/Images/AlumniExplore02.webp";
import AubreyPlaza from "../../assets/Images/AlumniExplore03.webp";
import BillHaider from "../../assets/Images/AlumniExplore01.Webp";
import StevenSpielberg from "../../assets/Images/AlumniHeadingImage.webp";

const GuestSection = () => {
  return (
    <div className="flex justify-center md:justify-end w-full px-4 sm:px-6 md:pr-16 lg:pr-24 xl:pr-32 py-8">
      <div className="relative bg-sky-100 p-6 sm:p-8 rounded-2xl shadow-md w-full max-w-3xl">
        <img
          src={MicIcon}
          alt="Mic Icon"
          className="absolute -top-12 right-4 sm:right-8 w-16 h-auto sm:w-20"
        />

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Live online priority access to guest appearances by industry professionals
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          JIU members get exclusive priority access to our online live guest lectures, events,
          and Q&As, firsthand as they occur, before any content becomes available online to
          general public audiences.
        </p>
        <p className="text-gray-700 mb-6">
          Emails for upcoming live online events will be sent to JIU Members, as part of the
          priority group mailing, including event details and registration information for each
          event. <span className="font-semibold">Previous guest speakers have included:</span>
        </p>

        {/* Speakers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div>
            <img
              src={AdamDriver}
              alt="Adam Driver"
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover"
            />
            <p className="mt-2 font-semibold text-gray-800">Adam Driver</p>
          </div>
          <div>
            <img
              src={AubreyPlaza}
              alt="Aubrey Plaza"
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover"
            />
            <p className="mt-2 font-semibold text-gray-800">Aubrey Plaza</p>
          </div>
          <div>
            <img
              src={BillHaider}
              alt="Bill Haider"
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover"
            />
            <p className="mt-2 font-semibold text-gray-800">Bill Haider</p>
          </div>
          <div>
            <img
              src={StevenSpielberg}
              alt="Steven Spielberg"
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover"
            />
            <p className="mt-2 font-semibold text-gray-800">Steven Spielberg</p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-6">
          *Online events are free to JIU members. JIU will make access to online guest speaker
          events available to members as they occur.
        </p>
      </div>
    </div>
  );
};

export default GuestSection;