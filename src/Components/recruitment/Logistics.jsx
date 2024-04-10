import { useEffect } from "react";
import { Link } from "react-router-dom";

const Logistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative w-full h-full font-Poppins px-8 py-8 flex flex-col justify-center items-center gap-4">
      <h1 className="text-[2rem] lg:text-[3rem] font-extrabold">
        IEEE JUSB Logistics Team Recruitment 2024
      </h1>
      <div className="flex flex-col gap-6 px-4 md:px-2 py-4 md:w-[80%] lg:w-[55%]">
        <ol className="list-decimal flex flex-col justify-center items-center gap-4">
          <li className="r marker:text-xl marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">
              A direct interview will be conducted for the Logistics team.
            </h1>
            <div className="relative">
              <p className="">
                In order to participate in the interview fill in the form given
                below.
              </p>
            </div>
          </li>
        </ol>
        <div className="flex flex-col gap-4">
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSd75Qrnqh8WdzDx1TRuvhTAdtgPpdGVUcfte9t5-xbOl2wF5w/viewform?usp=sf_link"
            target="_blank"
            className="r text-white rounded-lg bg-sky-600 w-fit mx-auto px-4 py-2"
          >
            Register Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
