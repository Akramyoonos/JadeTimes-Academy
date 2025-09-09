import React from 'react';

// --- IMPORTANT ---
// Update this path to where you have saved the image in your project.
import studentImage from '../../assets/Images/request-info-1920x857-1.jpeg'; 

const NyfaRequestInfo = () => {
  // CSS for custom dropdown arrows is included directly using a <style> tag.
  const customStyles = `
    .custom-select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 1em;
        padding-right: 2.5rem;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side */}
            <div className="flex flex-col">
              <div className="h-1/2">
                <img 
                  src={studentImage} 
                  alt="JIU student working with lighting equipment" 
                  className=" h-full min-w-7xl  "
                />
              </div>
              <div className="bg-white p-8 md:p-16 flex-grow flex items-center">
                <div>
                  <div className="flex items-start">
                    <span className="w-1 h-20 bg-fuchsia-600 mr-6"></span>
                    <h1 className="text-4xl md:text-5xl font-light text-black tracking-wider">
                      TAKE THE FIRST STEP<br />WITH JIU
                    </h1>
                  </div>
                  <p className="mt-6 text-gray-600">
                    At JIU, students get hands-on, immersive training in film, media, and performing arts. Fill out the form to find out more about our programs, financial aid options, and admissions process.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-black text-white p-8 md:p-16 md:mr-16 my-22">
              <div className="flex items-center">
                <span className="w-1 h-12 bg-fuchsia-500 mr-6"></span>
                <h2 className="text-4xl font-semibold tracking-widest">REQUEST INFO</h2>
              </div>
            
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="first-name" className="text-xs font-bold tracking-widest">FIRST NAME *</label>
                  <input type="text" id="first-name" className="w-full mt-2 p-3 bg-white border-0 text-black" />
                </div>
                <div>
                  <label htmlFor="last-name" className="text-xs font-bold tracking-widest">LAST NAME *</label>
                  <input type="text" id="last-name" className="w-full mt-2 p-3 bg-white border-0 text-black" />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-bold tracking-widest">EMAIL *</label>
                  <input type="email" id="email" className="w-full mt-2 p-3 bg-white border-0 text-black" />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-bold tracking-widest">PHONE (NUMBER ONLY) *</label>
                  <input type="tel" id="phone" className="w-full mt-2 p-3 bg-white border-0 text-black" />
                </div>
                <div>
                  <label htmlFor="country" className="text-xs font-bold tracking-widest">COUNTRY *</label>
                  <select id="country" defaultValue="" className="custom-select w-full mt-2 p-3 bg-white border-0 text-black">
                    <option value="" disabled></option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="education-level" className="text-xs font-bold tracking-widest">HIGHEST EDUCATION LEVEL COMPLETED *</label>
                  <select id="education-level" defaultValue="" className="custom-select w-full mt-2 p-3 bg-white border-0 text-black">
                    <option value="" disabled></option>
                    <option>High School</option>
                    <option>Associate's Degree</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="program" className="text-xs font-bold tracking-widest">DEGREE/PROGRAM INQUIRING ABOUT *</label>
                  <select id="program" defaultValue="" className="custom-select w-full mt-2 p-3 bg-white border-0 text-black">
                    <option value="" disabled></option>
                    <option>Filmmaking</option>
                    <option>Acting for Film</option>
                    <option>Photography</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="major" className="text-xs font-bold tracking-widest">MAJOR/DISCIPLINE *</label>
                  <select id="major" defaultValue="" className="custom-select w-full mt-2 p-3 bg-white border-0 text-black">
                    <option value="" disabled></option>
                    <option>Directing</option>
                    <option>Cinematography</option>
                    <option>Screenwriting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="campus" className="text-xs font-bold tracking-widest">CAMPUS/LOCATION *</label>
                  <select id="campus" defaultValue="" className="custom-select w-full mt-2 p-3 bg-white border-0 text-black">
                    <option value="" disabled></option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>Miami</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full bg-cyan-400 text-black font-bold py-4 tracking-widest hover:bg-cyan-500 transition-colors">SUBMIT</button>
              </form>
              <p className="text-xs text-gray-400 mt-4">
                By submitting this form, you give New York Film Academy your consent to contact you regarding our educational services using email, text or telephone. Msg. & data rates may apply. Please note, you are not required to provide this consent to learn more about JIU or to enroll in our programs. we invite you to contact us directly at: +1-212-674-4300 and speak with a representative.
              </p>
            </div>
          </div>
        </main>
        
        {/* Bottom Banner */}
        <footer className="bg-fuchsia-600 text-white p-12 text-center">
          <p className="font-semibold tracking-wider">NEXT START DATE APPROACHING - REQUEST INFORMATION TO FIND OUT MORE ABOUT OUR PROGRAMS</p>
        </footer>
      </div>
    </>
  );
};

export default NyfaRequestInfo;