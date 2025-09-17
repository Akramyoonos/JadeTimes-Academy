import React, { useState, useEffect, useMemo } from 'react';
import FeaturedEventCard from '../components/Event/FeaturedEventCard.jsx';
import EventItem from '../components/Event/EventItem.jsx';
import Calendar from '../components/Event/Calendar.jsx';
import CheckboxFilter from '../components/Event/CheckboxFilter.jsx';
import FilterSection from '../components/Event/FilterSection.jsx';
import { useSearch } from '../context/SearchContext';

/* ────────── sidebar icons ────────── */
const CalSmall = () => <i className="fa-solid fa-table-cells mr-2 text-pink-600" />;
const CapSmall = () => <i className="fa-solid fa-graduation-cap mr-2 text-pink-600" />;
const PinSmall = () => <i className="fa-solid fa-location-dot mr-2 text-pink-600" />;

/* ────────── search icon ────────── */
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400"
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-5-5m2-6a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

/* ────────── demo data ────────── */
const featuredEvents = [
  {
    title: 'Campus Tour - New York City',
    date:  'Friday, August 1 2025  11:00 AM – 12:00 PM EDT',
    location: '17 Battery Pl, NYC NY 10004',
    description:
      'Join us at NYFA for a Tour of our New York City location. Please arrive 15 minutes early to check in.',
  },
  {
    title: 'Campus Tour - Los Angeles',
    date:  'Monday, August 4 2025  2:00 PM – 4:00 PM PDT',
    location: '3300 Riverside Dr, Burbank CA 91505',
    description:
      'Experience the vibrant campus life at our Los Angeles location. See where movie magic happens!',
  },
];

// NOTE: Using event titles as keys is not ideal, especially with duplicate titles.
// In a real application, each event should have a unique ID.
const dailyEvents = [
  {
    date: '2025-08-01',
    time: '10:00 AM – 11:00 AM EDT',
    title: 'Virtual Info Session - Film Production',
    location: 'Online Event',
  },
  {
    date: '2025-08-02',
    time: '01:00 PM – 02:00 PM EDT',
    title: 'Campus Tour - New York City',
    location: '17 Battery Pl, NYC NY 10004',
  },
  {
    date: '2025-08-03',
    time: '03:00 PM – 04:00 PM PDT',
    title: 'Open House - Los Angeles Campus',
    location: '3300 Riverside Dr, Burbank CA 91505',
  },
  {
    date: '2025-08-04',
    time: '09:00 AM – 10:00 AM EDT',
    title: 'Portfolio Review - Photography',
    location: 'Zoom Meeting',
  },
  {
    date: '2025-08-05',
    time: '02:30 PM – 03:30 PM EDT',
    title: 'Guest Speaker Series - Screenwriting',
    location: 'Main Auditorium, NYC Campus',
  },
  {
    date: '2025-08-06',
    time: '11:00 AM – 12:00 PM PDT',
    title: 'Acting Workshop - LA Studio',
    location: 'LA Studio 3, Burbank CA',
  },
  {
    date: '2025-08-07',
    time: '04:00 PM – 05:00 PM EDT',
    title: 'Admissions Q&A - Online',
    location: 'Webinar',
  },
  {
    date: '2025-08-08',
    time: '06:00 PM – 07:00 PM EDT',
    title: 'Alumni Mixer - NYC Rooftop',
    location: 'Rooftop Bar, NYC',
  },
  {
    date: '2025-08-09',
    time: '10:30 AM – 11:30 AM PDT',
    title: 'Film Screening & Discussion',
    location: 'LA Screening Room',
  },
  {
    date: '2025-08-10',
    time: '01:00 PM – 02:00 PM EDT',
    title: 'Music Production Demo',
    location: 'Music Studio, NYC Campus',
  },
  {
    date: '2025-08-11',
    time: '03:00 PM – 04:00 PM PDT',
    title: 'Game Design Showcase',
    location: 'Virtual Expo',
  },
  {
    date: '2025-08-12',
    time: '09:00 AM – 10:00 AM EDT',
    title: 'Animation Portfolio Workshop',
    location: 'Art Studio, NYC Campus',
  },
   {
    date: '2025-07-24',
    time: '09:00 AM – 10:00 AM EDT',
    title: 'Animation Portfolio Workshop',
    location: 'Art Studio, NYC Campus',
  },
];

const typeFilters = [
  'Virtual Information Session',
  'Campus Tour',
  'Open House',
  'College Fair',
  'Thespian Event',
  'Talent Convention',
  'Graduate Fair',
  'Guidance Visit',
];

export default function Events() {
  const [slide, setSlide] = useState(0);
  const { searchQuery } = useSearch();

  /* ────── filters / collapse state ────── */
  const [showAllTypes, setShowAllTypes] = useState(false);
  const [showNearby, setShowNearby]     = useState(true);
  const visibleTypes = showAllTypes ? typeFilters : typeFilters.slice(0, 5);

  /* ────── search and filter state ────── */
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [nearbySearch, setNearbySearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTypeChange = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const handleNearbySearch = () => {
    // In a real app, this would make an API call to find events near the location.
    alert(`Searching for events near: ${nearbySearch}`);
  };

  const handleCurrentLocation = () => {
    // In a real app, this would use the browser's Geolocation API.
    alert('Finding events near your current location...');
  };

  const handleDateClick = (dateString) => {
    setSelectedDate(prevDate => (prevDate === dateString ? null : dateString)); // Toggle selection
  };

  const handleClearDate = () => {
    setSelectedDate(null);
  };

  const searchTermLower = searchQuery.toLowerCase();

  // Memoize filtered results to prevent unnecessary recalculations
  const filteredFeaturedEvents = useMemo(() => {
    return featuredEvents.filter(event =>
      event.title.toLowerCase().includes(searchTermLower) ||
      event.location.toLowerCase().includes(searchTermLower) ||
      event.description.toLowerCase().includes(searchTermLower)
    );
  }, [searchTermLower]);

  const filteredDailyEvents = useMemo(() => {
    return dailyEvents.filter(event => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTermLower) ||
        event.location.toLowerCase().includes(searchTermLower);
      const matchesType =
        selectedTypes.length === 0 ||
        selectedTypes.some(type => event.title.includes(type));
      const matchesDate = selectedDate ? event.date === selectedDate : true;
      return matchesSearch && matchesType && matchesDate;
    });
  }, [searchTermLower, selectedTypes, selectedDate]);

  // Effect for auto-playing carousel and resetting slide
  useEffect(() => {
    setSlide(0);
    if (filteredFeaturedEvents.length > 1) {
      const t = setInterval(() => {
        setSlide(p => (p + 1) % filteredFeaturedEvents.length);
      }, 5000);
      return () => clearInterval(t);
    }
  }, [filteredFeaturedEvents.length]);

  // Format date for display, handling case where there are no events
  const displayDate = selectedDate
    ? new Date(selectedDate.replace(/-/g, '/')).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'All Events';

  return (
    <div className="bg-[#f5f6f8] min-h-screen font-sans">
     

      {/* full-width layout */}
      <main className="w-full px-6 py-8 grid lg:grid-cols-3 gap-8">
        {/* ────── left 2/3 ────── */}
        <section className="lg:col-span-2">
          {/* featured carousel */}
          <h3 className="font-bold text-lg mb-4">FEATURED EVENTS</h3>
          {filteredFeaturedEvents.length > 0 ? (
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                {filteredFeaturedEvents.map(ev => (
                  <div key={ev.title} className="w-full flex-shrink-0">
                    <FeaturedEventCard event={ev} />
                  </div>
                ))}
              </div>

              {/* dots */}
              {filteredFeaturedEvents.length > 1 && (
                <div className="flex justify-center mt-3 space-x-2">
                  {filteredFeaturedEvents.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 w-2 rounded-full ${slide === i ? 'bg-gray-800' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-lg bg-white p-6 text-center text-gray-500">
              <p>No featured events match your search.</p>
            </div>
          )}

          {/* daily list */}
          <div className="mt-10">
            <div className="bg-gray-200 px-4 py-2 flex justify-between items-center font-bold">
              <span>{displayDate}</span>
              {selectedDate && (
                <button
                  onClick={handleClearDate}
                  className="px-3 py-1 text-sm font-medium bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="bg-white rounded-b-md shadow-sm">
              {filteredDailyEvents.length > 0 ? (
                filteredDailyEvents.map((ev, index) => (
                  <EventItem key={`${ev.title}-${index}`} event={ev} />
                ))
              ) : (
                <p className="p-4 text-gray-500">No events match your criteria.</p>
              )}
            </div>
          </div>
        </section>

        {/* ────── right sidebar ────── */}
        <aside className="space-y-8">
          <Calendar date={new Date()} view="list" events={dailyEvents} onDateClick={handleDateClick} />

          <div className="bg-white rounded-lg shadow-sm p-4 divide-y divide-gray-200">
            {/* quick links */}
            <div className="space-y-3 pb-4">
              <a href="#" className="flex items-center font-semibold hover:text-blue-600">
                <CalSmall /> ALL EVENTS
              </a>
              <a href="#" className="flex items-center font-semibold hover:text-blue-600">
                <CapSmall /> FEATURED EVENTS
              </a>
            </div>

            {/* nearby */}
            <div className="py-4 space-y-3">
              <button
                className="w-full flex justify-between items-center font-semibold"
                onClick={() => setShowNearby(o => !o)}
              >
                <span className="flex items-center">
                  <PinSmall /> NEARBY
                </span>
                <i
                  className={`fa-solid fa-angle-down transition-transform ${
                    showNearby ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showNearby && (
                <div className="space-y-3 pt-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by City, State, Zip"
                      className="w-full border rounded py-2 pl-3 pr-11 text-sm"
                      value={nearbySearch}
                      onChange={(e) => setNearbySearch(e.target.value)}
                    />
                    <button
                      className="absolute right-0 top-0 h-full px-3 bg-orange-700 hover:bg-orange-800 text-white"
                      onClick={handleNearbySearch}
                    >
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </div>

                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-semibold"
                    onClick={handleCurrentLocation}
                  >
                    CURRENT LOCATION
                  </button>
                </div>
              )}
            </div>

            {/* type filters */}
            <FilterSection title="TYPE" defaultOpen>
              {visibleTypes.map(t => (
                <CheckboxFilter
                  key={t}
                  label={t}
                  isChecked={selectedTypes.includes(t)}
                  onChange={() => handleTypeChange(t)}
                />
              ))}

              <button
                className="mt-2 text-blue-600 hover:underline text-sm font-medium"
                onClick={() => setShowAllTypes(o => !o)}
              >
                {showAllTypes ? 'Show Less' : 'Show More'}
              </button>
            </FilterSection>
          </div>
        </aside>
      </main>
    </div>
  );
}