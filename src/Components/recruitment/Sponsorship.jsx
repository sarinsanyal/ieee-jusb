import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sponsorship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative w-full h-full font-Poppins px-8 py-8 flex flex-col justify-center items-center gap-4">
      <h1 className="text-[2rem] lg:text-[3rem] font-extrabold">
        IEEE JUSB Sponsorship Team Recruitment 2024
      </h1>
      <div className="flex flex-col gap-6 px-4 md:px-2 py-4 md:w-[80%] lg:w-[55%]">
        <ol className="flex flex-col justify-center items-center gap-4">
          <li className="r marker:text-xl marker:font-bold">
            <div className="relative">
              <p className="">
                A Techno-Management Fest is being conducted at Jadavpur
                University. For the same, being a member of the sponsorship
                team, you have to bring in sponsors.
              </p>
            </div>
          </li>
          <li className="r marker:text-xl marker:font-bold">
            <div className="relative">
              <p className="">
                The first step in bringing in sponsors, is identifying the set
                of companies that may be potential sponsors. Keeping that it
                mind, you are to do the needed research, and bring in the names
                and details of the set of companies. Include details like what
                the company's goal is, and how it aligns with us. In addition,
                bring in their contact details, like mail-id and phone numbers
                wherever possible.
              </p>
            </div>
          </li>
          <li className="marker:text-xl marker:font-bold w-full">
            <div className="relative">
              <p className="w-full font-bold">
                This is a non-exhaustive assignment, so your efforts will be
                valued.
              </p>
            </div>
          </li>
          <li className="marker:text-xl marker:font-bold w-full">
            <div className="relative">
              <p className="font-bold italic">All the best!</p>
            </div>
          </li>
        </ol>
        <div className="flex flex-col gap-4">
          <p className="font-bold block">
            Submission deadline:
            <span className="text-red-800"> 20/04/2024</span>
          </p>
          <Link
            to="https://forms.gle/2zn3wqbD2uZJPxebA"
            target="_blank"
            className="r text-white rounded-lg bg-sky-600 text-center w-full md:w-fit mx-auto px-4 py-2"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
