import { useEffect } from "react";

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
        <ol className="list-decimal flex flex-col justify-center items-center gap-4">
          <li className="r marker:text-xl marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">
              Social Media Audit and Strategy Development
            </h1>
            <div className="relative">
              <p className="">
                Conduct a comprehensive audit for IEEE JUSB to present ML
                Accelerator Summit 3.0 through a PowerPoint or poster. Develop a
                strategic plan for optimizing the IEEE's social media channels
                to enhance brand visibility, engagement, and reputation
                management.
              </p>
            </div>
          </li>
        </ol>
        <div className="flex flex-col gap-4">
          <p className="font-bold block">
            You have to choose any one task from the above and complete it by
            <span className="text-red-800"> 17/04/2024</span>
          </p>
          <p className="font-bold block">
            Special preferences given to those students who have good skills in
            Excel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
