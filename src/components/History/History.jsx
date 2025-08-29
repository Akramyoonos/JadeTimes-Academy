import React from 'react'

const History = () => {
    return (
        <div className="bg-gray-50 font-sans text-gray-900 pt-24">
            <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
                <main className="flex-1">
                    <div className="flex items-center gap-6 mb-10">
                        <span aria-hidden="true" className="block w-2 h-16 bg-yellow-300 rounded-full"></span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-tight">
                            NYFA'S HISTORY: A TIMELINE
                        </h1>
                    </div>
                    <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-12">
                       In 1992, Jerry Sherlock, executive producer of The Hunt for Red October (1990), set out to create a 
                       school for filmmakers by filmmakers, establishing our total immersion filmmaking school, New York
                       Film Academy. Sherlock envisioned a school that would provide a collaborative creative
                       environment, industry-standard equipment, and a faculty of active industry professionals, giving
                       aspiring storytellers the resources to write, shoot, direct, and edit their own short films. With a team
                       of filmmakers and educators, including Harvard graduate and now NYFA President Michael Young, 
                       Sherlock opened NYFA in New York City’s Tribeca Film Center. In 1994, NYFA’s headquarters moved
                       to the Tammany Hall Building in Union Square. In 2014, NYFA relocated to Battery Park, overlooking Ellis
                       Island and the Statue of Liberty.<br /><br />

                       Today, NYFA is a global institution with campuses in New York City, Los Angeles, Miami, Gold Coast
                       (Australia), and Florence (Italy), as well as additional satellite locations. NYFA’s campuses are
                       modern spaces with state-of-the-art, purpose-built classrooms, editing rooms, shooting spaces, 
                       with theatres at our campuses in New York City and Los Angeles. NYFA’s hands-on approach 
                       continues to set it apart from other film and art schools, giving students the confidence to pursue 
                       their goals as visual and performing artists while preparing them for real-world challenges in film, 
                       television, media, and entertainment.
                    </p>
                </main>
               <aside className="w-full lg:w-80 flex-shrink-0 bg-white p-4 rounded-lg shadow-xl max-h-64">
  <h2 id="related-links-heading" className="text-lg font-extrabold uppercase tracking-wider text-gray-800 mb-4">
    RELATED LINKS
  </h2>
  <nav aria-labelledby="related-links-heading" className="flex flex-col text-base font-medium text-gray-700 space-y-2">
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
      ABOUT US
    </a>
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
    MISSION AND PURPOSE
    </a>
    <a href="#" className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
      EXPLORE OUR PROGRAMS
    </a>
  </nav>
</aside>
            </div>
        </div>
    )
}

export default History