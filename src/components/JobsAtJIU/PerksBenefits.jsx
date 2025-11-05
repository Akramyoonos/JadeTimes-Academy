import React from 'react';

// --- SVG Icon Components ---
// It's a good practice to manage icons like this for reusability.

const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m12 3a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const VacationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.672-2.672L11.25 18l1.938-.648a3.375 3.375 0 002.672-2.672L16.25 13.5l.648 1.938a3.375 3.375 0 002.672 2.672L21.75 18l-1.938.648a3.375 3.375 0 00-2.672 2.672z" />
  </svg>
);

const SickIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" />
  </svg>
);

const HolidaysIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 15.75h.008v.008H12v-.008z" />
  </svg>
);

const HealthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const DisabilityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

const CommutersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m-10.5-4.5v-3.375c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125V14.25" />
  </svg>
);

const ScheduleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12h.008v.008H12V12zm-3.75 0h.008v.008H8.25V12zm0 3.75h.008v.008H8.25v-.008zm3.75 0h.008v.008H12v-.008zm3.75 0h.008v.008h-.008v-.008z" />
  </svg>
);

const BalanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 10.397 9.537 11 10.5 11h3c.963 0 1.5-.603 1.5-1.437V9M9 9.563V9m0 0a1.5 1.5 0 10-3 0m3 0a1.5 1.5 0 00-3 0m9 0a1.5 1.5 0 10-3 0m3 0a1.5 1.5 0 00-3 0" />
  </svg>
);

const EventsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
);

const EquipmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
  </svg>
);

const ScreeningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m3.75-3.75v3.75m-7.5-3.75h7.5m-7.5 0v-3.75m3.75 0v3.75m-3.75 0h3.75m-3.75 0v-3.75m0 0h1.5m-1.5 0v-3.75m0 0h1.5m-1.5 0V6a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 012.25 2.25v1.5m-1.5 0h-3.75m-1.5 0v3.75m0 0h1.5m-1.5 0v3.75" />
  </svg>
);

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.282 2.72a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741-.479m-4.5-5.232a3 3 0 01-1.325-3.325A4.5 4.5 0 0110.5 6a4.5 4.5 0 015.325 3.167 3 3 0 01-1.325 3.325" />
  </svg>
);

const GrantsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 11.21 12.77 11 12 11c-.77 0-1.536.21-2.121.562L9 12m0 0L6 14m3-3L6 9" />
  </svg>
);

const SavingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c-3.181 0-5.918.6-8.25 1.5s-5.069 1.5-8.25 1.5" />
    </svg>
);


// --- Data for the perks ---
const perksData = [
    { icon: <WalletIcon />, text: 'Competitive Pay' },
    { icon: <VacationIcon />, text: 'Vacation Time' },
    { icon: <SickIcon />, text: 'Sick Time' },
    { icon: <HolidaysIcon />, text: 'Paid Holidays' },
    { icon: <HealthIcon />, text: 'Health, Vision, Dental' },
    { icon: <DisabilityIcon />, text: 'Long-term Disability' },
    { icon: <DisabilityIcon />, text: 'Short-term Disability' },
    { icon: <HealthIcon />, text: 'Voluntary Term Life' },
    { icon: <CommutersIcon />, text: 'Commuters Benefit' },
    { icon: <ScheduleIcon />, text: 'Flexible Schedules' },
    { icon: <BalanceIcon />, text: 'Work Life Balance' },
    { icon: <EventsIcon />, text: 'Fun Company Events' },
    { icon: <EquipmentIcon />, text: 'Check Out Equipment for Personal Projects' },
    { icon: <ScreeningIcon />, text: 'Attend Screenings and Q&As' },
    { icon: <NetworkIcon />, text: 'Network and Build Professional Relationships' },
    { icon: <GrantsIcon />, text: 'Professional Development Grants' },
    { icon: <SavingsIcon />, text: 'Flexible Savings Account - Health and Dependent' },
];

// --- A reusable component for each perk item ---
const PerkItem = ({ icon, text }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 text-cyan-500">
      {icon}
    </div>
    <p className="mt-2 text-sm text-gray-700">{text}</p>
  </div>
);


// --- The main component ---
const PerksAndBenefits = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container px-6 sm:px-6 md:px-6 lg:px-35 py-12">
        <header className="mb-12">
          <div className="flex items-center">
            <div className="w-1.5 h-12 sm:h-16 bg-purple-600 mr-4"></div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 tracking-wider">
              PERKS & BENEFITS
            </h1>
          </div>
          <p className="mt-6 text-base sm:text-lg text-gray-600">
            JIU Employees thrive on creativity and diversity. JIU also brings the following perks along!
          </p>
        </header>

        <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {perksData.map((perk, index) => (
            <PerkItem key={index} icon={perk.icon} text={perk.text} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default PerksAndBenefits;