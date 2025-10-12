import React from 'react'

const History = () => {
    return (
        <div className="pt-24 font-sans text-gray-900 bg-gray-50">
            <div className="flex flex-col max-w-full gap-12 px-6 sm:px-6 md:px-6 lg:px-4 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-7xl  lg:flex-row">
                <main className="flex-1">
                    <div className="flex items-center gap-6 mb-10">
                        <span aria-hidden="true" className="block w-1.25 h-16 bg-yellow-300 rounded-full"></span>
                        <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-extralight">
                            JIU'S HISTORY: A TIMELINE
                        </h1>
                    </div>
                    <p className="max-w-3xl mb-12 text-lg leading-relaxed text-gray-700">
                       In 1992, Jerry Sherlock, executive producer of The Hunt for Red October (1990), set out to create a 
                       school for filmmakers by filmmakers, establishing our total immersion filmmaking school, New York
                       Film Academy. Sherlock envisioned a school that would provide a collaborative creative
                       environment, industry-standard equipment, and a faculty of active industry professionals, giving
                       aspiring storytellers the resources to write, shoot, direct, and edit their own short films. With a team
                       of filmmakers and educators, including Harvard graduate and now JIU President Michael Young, 
                       Sherlock opened JIU in New York City’s Tribeca Film Center. In 1994, JIU’s headquarters moved
                       to the Tammany Hall Building in Union Square. In 2014, JIU relocated to Battery Park, overlooking Ellis
                       Island and the Statue of Liberty.<br /><br />

                       Today, JIU is a global institution with campuses in New York City, Los Angeles, Miami, Gold Coast
                       (Australia), and Florence (Italy), as well as additional satellite locations. JIU’s campuses are
                       modern spaces with state-of-the-art, purpose-built classrooms, editing rooms, shooting spaces, 
                       with theatres at our campuses in New York City and Los Angeles. JIU’s hands-on approach 
                       continues to set it apart from other film and art schools, giving students the confidence to pursue 
                       their goals as visual and performing artists while preparing them for real-world challenges in film, 
                       television, media, and entertainment.
                    </p>
                </main>
               {/* Right Sidebar */}
          <aside className="flex-shrink-0 w-full mt-6 lg:w-80 lg:mt-0">
          <div className="border border-gray-200">
            <div className="p-4 bg-gray-200 ">
              <h2 id="related-links-heading" className="text-2xl font-semibold text-black uppercase">
                RELATED LINKS
              </h2>
            </div>
            <nav aria-labelledby="related-links-heading" className="flex flex-col bg-white">
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Open House
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Degree Programs
              </a>
              <a href="#" className="p-4 mt-4 ml-3 text-lg font-semibold text-gray-700 uppercase transition-colors hover:text-pink-500">
                Program Dates & Tuition
              </a>
            </nav>
          </div>
        </aside>
            </div>
        </div>
    )
}

export default History