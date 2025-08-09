import React from 'react'

const OnlineWeekendCamps = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-6 lg:p-8 font-sans pt-12">



        {/* <!-- Main Content Card --> */}
        <div className="p-8 sm:p-12 lg:p-16">
            <div className="relative pl-8 sm:pl-10 mb-8">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-yellow-500 rounded-full"></div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    ONLINE WEEKEND CAMPS FOR TEENS AND KIDS
                </h1>
            </div>

            <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed border-t border-gray-200 pt-6">
                NYFA offers a selection of <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors duration-200">immersive online programs for teens and kids</a>. The workshops are active and creative learning experiences where students participate from home. Throughout the course, students interact with teachers and classmates, creating their own original work and projects.
            </p>

        </div>

    </div>

  )
}

export default OnlineWeekendCamps
