import { useEffect } from "react";

const Design = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative font-Poppins px-8 py-8 flex flex-col justify-center items-center gap-4">
      <h1 className="text-[2rem] lg:text-[3rem] font-extrabold">
        IEEE JUSB Design Team Recruitment 2024
      </h1>

      <div className="flex flex-col gap-6 px-4 md:px-2 py-4 md:w-[80%] lg:w-[60%]">
        <ol className="flex flex-col justify-center items-center gap-8 w-full">
          <li className="marker:font-bold w-full">
            <h1 className="text-2xl font-bold mb-4 w-full">Tasks.md</h1>
            <div className="relative w-[90%]">
              <ol className="flex flex-col gap-2">
                <li className="font-bold">
                  <i>Attempt any two tasks from any sections:</i>
                </li>
              </ol>
            </div>
          </li>
          <li className="marker:font-bold w-full">
            <h1 className="text-2xl font-bold mb-4">Graphics Design (GD)</h1>
            <div className="relative w-[90%] mx-auto">
              <ol className="list-decimal flex flex-col gap-2">
                <li>
                  Design a dynamic logo for the IEEE TECHX Congress 2024,
                  embodying the essence of speed and technology, accompanied by
                  a vibrant color palette evoking energy and innovation.
                </li>
                <li>
                  Design an instagram post describing one of the tracks of IEEE
                  TECHX Congress 2024. (Get the details of tracks from
                  <a
                    href="https://ieee-ju.github.io/techX/#sch"
                    target="_blank"
                    rel="noreferrer"
                    className="pl-2 text-sky-700"
                  >
                    https://ieee-ju.github.io/techX/#sch
                  </a>
                  )
                </li>
                <li>
                  Design a social media post that showcases the lineup of
                  speakers for the ML Accelerator Summit. Ensure clarity in
                  presenting speaker information, including names, titles,
                  affiliations, and brief bios. (Get the details of speakers
                  from
                  <a
                    href="https://doubleslash.ieee-jaduniv.inindex.html#speakers"
                    target="_blank"
                    rel="noreferrer"
                    className="pl-2 text-sky-700"
                  >
                    https://doubleslash.ieee-jaduniv.inindex.html#speakers
                  </a>
                  )
                </li>
              </ol>
            </div>
          </li>
          <li className="marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">UI/UX Design (UD)</h1>
            <div className="relative w-[90%] mx-auto">
              <ol className="list-decimal flex flex-col gap-2">
                <li>
                  Design wireframes of a responsive single page web-app
                  interface for IEEE TECHX Congress 2024. Create different
                  sections for the homepage, about the event, tracks, speakers,
                  register, team, sponsors and contact, ensuring clarity in
                  layout and functionality. (Take reference from{" "}
                  <a
                    href="https://ieee-ju.github.io/techX"
                    target="_blank"
                    rel="noreferrer"
                    className="pl-2 text-sky-700"
                  >
                    https://ieee-ju.github.io/techX
                  </a>
                  )
                </li>
                <li>
                  Design wireframes of a responsive single page web-app
                  interface for DoubleSlash 3.0 Create different sections for
                  the homepage, about the event, tracks, speakers, prizes, FAQs,
                  sponsors and contact. (Take reference from
                  <a
                    href="https://doubleslash.ieee-jaduniv.in"
                    target="_blank"
                    rel="noreferrer"
                    className="pl-2 text-sky-700"
                  >
                    https://doubleslash.ieee-jaduniv.in
                  </a>
                  )
                </li>
              </ol>
            </div>
          </li>
          <li className="marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">Video Editing (VE)</h1>
            <div className="relative w-[90%] mx-auto">
              <ol className="list-decimal flex flex-col gap-2">
                <li>
                  Create a typographical trailer for the Cypher 3331 event,
                  aiming to attract Cypher 3331 attendees. The trailer should
                  succinctly convey event details, including dates, and evoke
                  anticipation through creative typography, music, and design.
                  Post-production must ensure quality while refraining from
                  unnecessary assets, utilizing original ones for extra credits.
                </li>
              </ol>
            </div>
          </li>
          <li className="marker:font-bold">
            <h1 className="text-2xl font-bold mb-4">SubmissionRules.md</h1>
            <div className="relative w-[90%] mx-auto">
              <ol className="list-disc flex flex-col gap-2">
                <li>
                  Save your design as given format{" "}
                  <span className="font-bold">
                    YourName_Task_id (e.g. Rohan_UD_2)
                  </span>
                  , upload it in cloud storage & share the link.(Don’t forget to
                  enable{" "}
                  <span className="font-bold">“anyone with the link” </span>
                  option)
                </li>
                <li>
                  Upload the raw design file (.psd, .ai, canva link, figma link
                  etc.) along with the exported design (.png, .jpg etc.) on
                  cloud storage.
                </li>
              </ol>
            </div>
          </li>
        </ol>
        <div className="flex flex-col gap-2">
          <p className="font-bold block">
            Note: It is strongly advised to refrain from using templates while
            completing the assigned tasks. We encourage the creation of original
            and innovative content, fostering creativity and ensuring unique
            solutions tailored to the specific objectives at hand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
