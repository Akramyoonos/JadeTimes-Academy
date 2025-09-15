import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PerkItem = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-300">
      <FontAwesomeIcon icon={icon} className="w-20 h-20 text-sky-400" />
      <p className="font-medium text-lg text-gray-900">{title}</p>
    </div>
  );
};

export default PerkItem;