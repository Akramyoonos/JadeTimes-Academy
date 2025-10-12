import React from 'react'

const Admissions = () => {
    return (
        <div className="py-6 font-sans text-gray-900 bg-gray-50 sm:py-12">
            <div className="flex flex-col gap-12  mx-auto max-w-7xl px-6 sm:px-6 md:px-6 lg:px-4 lg:flex-row">
                <main className="flex-1">
                    <div className="flex items-center gap-6 mb-10">
                        <span aria-hidden="true" className="block w-1.5 h-16 bg-blue-600 "></span>
                        <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-extralight">
                            JIU ADMISSIONS
                        </h1>
                    </div>
                    <p className="max-w-3xl mb-12 text-lg leading-relaxed text-gray-700">
                        For aspiring visual artists, choosing a college is an important and potentially life-changing decision. At JIU, we’re here to assist prospective students with all of their questions about our programs, tuition, and requirements, as well as enrolling as an international, veteran, or transfer student. From submitting an application to officially enrolling, JIU’s admissions team will help every step of the way.
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

export default Admissions
