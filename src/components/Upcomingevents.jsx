import React, { useState, useEffect } from 'react';

// --- Data ---
const deadlineData = [
  {
    type: "Journalism Program",
    category: "Journalism",
    deadline: "2025-09-01T23:59:59",
    displayDeadline: "September 1, 2025",
    commit: "September 10, 2025",
    fee: 150,
    duration: "4 weeks",
    mode: "Online",
    seats: 25,
    featured: true,
    enrollUrl: "/enroll/journalism-program",
  },
  {
    type: "Digital Marketing Bootcamp",
    category: "Digital Marketing",
    deadline: "2025-09-15T23:59:59",
    displayDeadline: "September 15, 2025",
    commit: "September 25, 2025",
    fee: 250,
    duration: "6 weeks",
    mode: "Live Sessions",
    seats: 15,
    enrollUrl: "/enroll/digital-marketing-bootcamp",
  },
  {
    type: "Advanced Creative Writing",
    category: "Journalism",
    deadline: "2025-10-01T23:59:59",
    displayDeadline: "October 1, 2025",
    commit: "October 10, 2025",
    fee: 200,
    duration: "8 weeks",
    mode: "Self-paced",
    seats: null,
    enrollUrl: "/enroll/advanced-creative-writing",
  },
  {
    type: "SEO & Analytics Mastery",
    category: "Digital Marketing",
    deadline: "2025-10-15T23:59:59",
    displayDeadline: "October 15, 2025",
    commit: null,
    fee: 300,
    duration: "5 weeks",
    mode: "Online",
    seats: 20,
    enrollUrl: "/enroll/seo-analytics-mastery",
  },
];

// --- Helper Functions & Components ---

const categoryStyles = {
  "Journalism": {
    bg: "bg-blue-50",
    border: "border-blue-200",
    shadow: "hover:shadow-blue-100",
    button: "bg-blue-600 hover:bg-blue-700",
    badge: "bg-blue-100 text-blue-800",
  },
  "Digital Marketing": {
    bg: "bg-green-50",
    border: "border-green-200",
    shadow: "hover:shadow-green-100",
    button: "bg-green-600 hover:bg-green-700",
    badge: "bg-green-100 text-green-800",
  },
};

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A4.992 4.992 0 0012 12a4.992 4.992 0 003-1.197" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(deadline) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsExpired(false);
      } else {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (isExpired) {
    return <div className="text-center font-semibold text-red-500 py-2">Enrollment Closed</div>;
  }

  const CircularProgress = ({ percentage, label, timeUnit, color }) => {
    const radius = 32;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative flex flex-col items-center">
        <svg width="80" height="80" className="transform -rotate-90">
          <circle
            className="text-gray-300"
            strokeWidth="6"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
          />
          <circle
            className={color}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-xl font-bold text-gray-800">{label}</div>
          <div className="text-xs uppercase text-gray-500">{timeUnit}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      <CircularProgress percentage={(timeLeft.days / 30) * 100} label={timeLeft.days} timeUnit="Days" color="text-blue-500" />
      <CircularProgress percentage={(timeLeft.hours / 24) * 100} label={timeLeft.hours} timeUnit="Hours" color="text-green-500" />
      <CircularProgress percentage={(timeLeft.minutes / 60) * 100} label={timeLeft.minutes} timeUnit="Min" color="text-yellow-500" />
      <CircularProgress percentage={(timeLeft.seconds / 60) * 100} label={timeLeft.seconds} timeUnit="Sec" color="text-red-500" />
    </div>
  );
};

// --- Main Component ---

const UpcomingEvents = () => {
  const [activeTab, setActiveTab] = useState('deadlines');

  const renderContent = () => {
    return (
      <div className="space-y-8">
        {deadlineData.map((item, index) => {
          const style = categoryStyles[item.category] || { bg: 'bg-gray-50', border: 'border-gray-200', shadow: 'hover:shadow-gray-100', button: 'bg-gray-600 hover:bg-gray-700', badge: 'bg-gray-100 text-gray-800' };
          return (
            <div key={index} className={`relative transition-shadow duration-300 rounded-xl border ${style.bg} ${style.border} ${style.shadow} overflow-hidden`}>
              {item.featured && (
                <div className={`absolute top-0 right-0 mt-4 mr-4 px-3 py-1 text-sm font-semibold rounded-full ${style.badge}`}>
                  Featured
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.type}</h3>
                <p className={`text-sm font-semibold mb-6 ${style.badge} inline-block px-3 py-1 rounded-full`}>{item.category}</p>
                
                <div className="mb-6">
                  <p className="text-lg font-semibold text-gray-700 mb-2">Time Left to Enroll:</p>
                  <CountdownTimer deadline={item.deadline} />
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                  <div className="flex items-center">
                    <CalendarIcon />
                    <div>
                      <p className="font-semibold">Enrollment Deadline</p>
                      <p>{item.displayDeadline}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p>{item.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <UsersIcon />
                    <div>
                      <p className="font-semibold">Seats Available</p>
                      <p>{item.seats !== null ? `${item.seats} remaining` : 'Unlimited'}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-3xl font-bold text-gray-800">${item.fee}</p>
                  </div>
                </div>
              </div>
              <div className={`px-6 py-4 ${style.bg}`}>
                <a href={item.enrollUrl} className={`w-full flex items-center justify-center text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 ${style.button}`}>
                  Enroll Now
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="EventsFont bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Course Enrollment</h1>
          <p className="mt-4 text-xl text-gray-600">Secure your spot in our upcoming courses. Enrollment is now open!</p>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('deadlines')}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-lg ${activeTab === 'deadlines' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Upcoming Courses
            </button>
          </nav>
          <a href="/events" className="flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-800 mt-4 sm:mt-0">
            <CalendarIcon />
            See All Events
          </a>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default UpcomingEvents;