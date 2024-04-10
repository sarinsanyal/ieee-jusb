import { useEffect } from "react";

const Tech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative font-Poppins px-8 py-8 flex flex-col justify-center items-center gap-4">
      <h1 className="text-[2rem] lg:text-[3rem] font-extrabold">
        IEEE JUSB Tech Team Recruitment 2024
      </h1>
      <div className="flex flex-col gap-6 px-4 md:px-2 py-4 md:w-[80%] lg:w-[60%]">
        <ol className="list-decimal flex flex-col justify-center items-center gap-4">
          <li className="r marker:text-xl marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">Portfolio Website</h1>
            <div className="relative">
              <p className="">
                Develop a personal portfolio website showcasing your skills,
                projects, and achievements. Your portfolio should include
                multiple sections such as a hero, about me, projects, and
                contact me. Ensure the design is visually appealing. Use 3D
                animations or keep it clean and minimal, it’s up to you. Be
                creative.
              </p>
            </div>
          </li>
          <li className="r marker:text-xl marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">
              Event Management Website
            </h1>
            <div className="relative">
              <p className="">
                Create a website for an upcoming IEEE event. The website should
                allow users to view upcoming events, register for events,
                speaker sessions and submit feedback after attending events.
                Design an intuitive user interface with separate sections for
                event listings, registration forms, and feedback submission.
                (Implementing backend functionality to handle event registration
                and feedback storage will give you an extra edge)(Refer to
                <a
                  href="https://ieee-ju.github.io/techX"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 text-sky-700"
                >
                  https://ieee-ju.github.io/techX
                </a>{" "}
                in order to get an idea of IEEE event websites)
              </p>
            </div>
          </li>
          <li className="r marker:text-xl marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">
              Recipe Website Using API
            </h1>
            <div className="relative">
              <p className="">
                Create a website that allows users to input the name of a dish
                and retrieve the recipe for it from an external API such as
                <a
                  href="https://api-ninjas.com/api/recipe"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 text-sky-700"
                >
                  https://api-ninjas.com/api/recipe
                </a>{" "}
                or any other similar API of your choice. Design an intuitive
                user interface where users can easily input the dish name and
                view the corresponding recipe. Implement backend functionality
                to fetch data from the API and display it dynamically on the
                website.
              </p>
            </div>
          </li>
          <li className="r marker:text-xl marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">
              Backend Authentication System
            </h1>
            <div className="relative">
              <p className="">
                Develop a backend authentication system with SignUp and SignIn
                functions. Users should be able to register for an account by
                providing their email and password, and then login using their
                credentials. (Bonus points will be awarded for implementing JWT
                or any other persistent login systems for enhanced security and
                user experience.)
              </p>
            </div>
          </li>
          <li className="r marker:text-xl marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">
              Bonus Task (can be done in addition to any one of the above four
              tasks)
              <br />
              Data Cleaning
            </h1>
            <div className="relative">
              <p className="">
                IEEE is organizing an event and has set up registration through
                two portals. The participant data received from the two sources
                is given to you in the form of two spreadsheets. Write a script
                to automatically combine the list of participants into a single
                spreadsheet, with columns for Participant Name, Team Name,
                Participant Type (leader/member), Participant Phone Number and
                Participant Email. Make sure to handle edge cases such as
                missing data appropriately.
              </p>
              <p className="mt-2 flex flex-wrap gap-2">
                <span className="font-bold">Link to files:</span>{" "}
                <a
                  className="bg-green-700 text-white px-2 py-[2px] rounded-md"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/spreadsheets/d/1PIjSBRUy8rNJoChCVUa7ElYaac5lPFWF/edit?usp=sharing&ouid=111672686721627549493&rtpof=true&sd=true"
                >
                  anon_data1
                </a>{" "}
                <a
                  className="bg-green-700 text-white px-2 py-[2px] rounded-md"
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.google.com/spreadsheets/d/1_eZoQk462qtDs6jas9nTx6b7kkJiU_zv/edit?usp=sharing&ouid=111672686721627549493&rtpof=true&sd=true"
                >
                  anon_data2
                </a>
              </p>
            </div>
          </li>
        </ol>
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-bold">Note:</span> Any technology stack can be
            used for these tasks(Although{" "}
            <span className="font-bold">
              once selected, the candidate will have to learn React.js/Next.js
              and Tailwind CSS
            </span>{" "}
            for which necessary resources will be provided later). Evaluation
            will be based on how well the project has been implemented,
            including factors such as responsive design, use of version-control
            tools, hosting, database connectivity, adherence to the task
            requirements and best practices.
            <span className="font-bold">
              Projects with higher level of difficulty will be given higher
              priority.
            </span>
          </p>
          <p className="font-bold block">
            Plagiarism in any form such as copy pasting from template etc. is
            highly prohibited and upon detection will lead to immediate
            disqualification of the candidate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
