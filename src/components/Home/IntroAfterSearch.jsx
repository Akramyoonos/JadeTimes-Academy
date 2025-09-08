import React from 'react';

export default function IntroAfterSearch() {
  return (
    <section className="bg-white">
      {/*
        FIX: Adjusted vertical padding for better rhythm and consistency.
        - `py-16` on mobile provides ample space.
        - `sm:py-24` on larger screens creates a more impactful section break.
        - `text-center` is added to focus the user's attention, which is effective for introductory sections.
      */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
        {/*
          FIX: Enhanced heading for better visual hierarchy.
          - `font-bold` makes the title stand out more significantly.
          - `tracking-tight` tightens letter spacing for a cleaner, more modern look on large text.
        */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
          Hands-on Film, Media, and Performing Arts School
        </h2>
        {/*
          FIX: Improved paragraph readability and consistency.
          - `leading-relaxed` provides a comfortable line height that is generally preferred for readability.
          - `max-w-3xl` is added to the paragraph itself to ensure an optimal line length, preventing it from
            stretching too wide within the main container on larger screens.
        */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          New York Film Academy was founded on the philosophy that “learning by doing” combined with
          best industry practices is more valuable than years of theoretical study for film, media,
          and performing arts students. This educational model allows students to achieve more in less
          time than at other institutions.
        </p>
      </div>
    </section>
  );
}