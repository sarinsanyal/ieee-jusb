import { useEffect } from "react";

const Pr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative font-Poppins px-8 py-8 flex flex-col justify-center items-center gap-4">
      <h1 className="text-[2rem] lg:text-[3rem] font-extrabold">
        IEEE JUSB PR Team Recruitment 2024
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
                strategic plan for optimizing the IEEE&apos;s social media
                channels to enhance brand visibility, engagement, and reputation
                management.
              </p>
            </div>
          </li>
          <li className="r marker:text-xl marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">New Event Idea</h1>
            <div className="relative">
              <p className="">
                You have to bring a new event idea to us. Which we may add to
                our bucket list for better engagement with students and which
                have a positive effect on our college and society. Explain the
                whole event idea through a PowerPoint and add some reasons why
                you think this new event will be a game changer for us.
              </p>
            </div>
          </li>
        </ol>
        <div className="flex flex-col gap-2">
          <p className="font-bold block">
            You have to choose any one task from the above and complete it by
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pr;
