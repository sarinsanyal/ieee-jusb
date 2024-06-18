import React from 'react'

export default function About() {
  return (
    <div className="bg-sky-950 dark:bg-[#002238] text-white dark:text-[#fffff0] py-10 pt-[90px] font-Josefin" id='about'>
      <div className="flex justify-center">
        <h2 className="text-4xl font-extrabold">ABOUT US</h2>
      </div>
      <hr className="w-28 h-1 mx-auto mt-3 bg-gray-100 border-0"></hr>
      <div className="mx-auto w-full max-w-screen-xl p-16 py-6 lg:py-8 justify-center text-center text-l">
        <p>As one of the oldest universities of the country, Jadavpur University, and its students have a certain duty - the duty
          to give back to society across all disciplines and inculcate the habit of thinking in every individual who comes along.
          The IEEE Jadavpur University Student Branch is one little endeavor in that process. Founded in 2010, we belong to
          the Kolkata section of Region 10 of the organization. One of the most active student branches in our section, we are
          dedicated to furthering technical and entrepreneurial innovations through hands-on interactive sessions. With large
          scale events and intimate, basic workshops, we try to keep something happening all year round - so that the fire of
          knowledge, learning and innovation never burns out. In this process of sharing our love for technology, we have
          slowly grown, met new people, evolved as a group and built around us, a community of like-minded individuals who
          are driven by a passion for learning and giving back to society...</p>
          <br />
          <a href="https://www.ieee.org" target='blank'><button type="button" className="text-white font-semibold bg-blue-900 px-5 py-2.5 me-2 mb-2 rounded transition-colors duration-150 ease-in-out hover:bg-blue-700 drop-shadow-md">More about IEEE</button></a>
      </div>
    </div>
  )
}
