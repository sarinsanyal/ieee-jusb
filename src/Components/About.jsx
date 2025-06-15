import React from 'react'

export default function About() {
  return (
    <div className="bg-sky-950 dark:bg-[#002238] text-white dark:text-[#fffff0] py-10 pt-[90px] font-Josefin" id='about'>
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">ABOUT US</h2>
          <hr className="w-28 h-1 mx-auto bg-gray-100 border-0"></hr>
        </div>

        {/* Content */}
        <div className="text-center mb-16">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            As one of the oldest universities of the country, Jadavpur University, and its students have a certain duty - 
            the duty to give back to society across all disciplines and inculcate the habit of thinking in every individual 
            who comes along. The IEEE Jadavpur University Student Branch is one little endeavor in that process.
          </p>
          <br />
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
            Founded in 2010, we belong to the Kolkata section of Region 10 of the organization. One of the most active 
            student branches in our section, we are dedicated to furthering technical and entrepreneurial innovations 
            through hands-on interactive sessions. With large scale events and intimate, basic workshops, we try to keep 
            something happening all year round - so that the fire of knowledge, learning and innovation never burns 
            out. In this process of sharing our love for technology, we have slowly grown, met new people, evolved as a 
            group and built around us, a community of like-minded individuals who are driven by a passion for learning 
            and giving back to society...
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">6+</div>
            <div className="text-xs sm:text-sm text-gray-300">Events Annually</div>
          </div>

          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">80+</div>
            <div className="text-xs sm:text-sm text-gray-300">Members</div>
          </div>

          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">5000+</div>
            <div className="text-xs sm:text-sm text-gray-300">Event Participants</div>
          </div>

          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">6</div>
            <div className="text-xs sm:text-sm text-gray-300">Partner IEEE Societies</div>
          </div>
        </div>

        {/* IEEE Button */}
        <div className="text-center">
          <a href="https://www.ieee.org" target='blank'>
            <button type="button" className="text-white font-semibold bg-blue-900 px-5 py-2.5 me-2 mb-2 rounded transition-colors duration-150 ease-in-out hover:bg-blue-700 drop-shadow-md">
              More about IEEE
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}