import { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative font-Poppins px-8 py-8 flex flex-col justify-center items-center gap-4">
      <h1 className="text-[2rem] lg:text-[3rem] font-extrabold">
        IEEE JUSB Content Team Recruitment 2024
      </h1>
      <p className="font-bold block">
            * Submission Deadline : 17/04/2024
      </p>
      <div className="flex flex-col gap-6 px-4 md:px-2 py-4 w-full md:w-[80%] lg:w-[55%]">
        <ol className="list-decimal flex flex-col justify-center items-center gap-4">
          <li className="r marker:text-xl marker:font-bold">
            <div className="relative">
              <p className="">
                Write a slide post within 10 slides for instagram on any{" "}
                <span className="font-bold">ONE</span> of the following topics:
              </p>
              <ul className="list-disc relative left-[7%]">
                <li>IOT</li>
                <li>Neuromorphic Computing</li>
                <li>Blockchain</li>
              </ul>
              <p className="mt-2">
                Ensure the slide contents are not too long, well sorted, and is
                an easy read, 10 slides maximum. (You can take inspiration from
                this post for each slide content
                <a
                  href="https://www.instagram.com/p/C11xxDnRGzX/?igsh=MTM5cXR6Zmk1ZnBobw=="
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 text-sky-700"
                >
                  here
                </a>
                )
              </p>
            </div>
          </li>
          <li className="marker:text-xl marker:font-bold">
            <div className="relative">
              <p className="">
                Write a letter to the Dean of students for booking Teqip seminar
                room 201 for the ML accelerator Summit 3.0 [Machine Learning
                Accelerator Summit 3.0 (13/01/2024 and 14/01/2024)]
                <br />
                <span className="font-bold mx-auto">or</span>
                <br />
                Write event report for ML Accelerator 3.0 [necessary information
                attached] <br />
                Website: <a href="https://ieee-ju.github.io/MLAS-3.0/" target="_blank">https://ieee-ju.github.io/MLAS-3.0/</a> <br />
                [Description: The event incorporated talk sessions and hands-on
                workshops to provide a comprehensive introduction to Machine
                Learning and Deep Learning, aiming to equip participants with a
                solid foundation and familiarize them with the promising future
                of this field. <br />
                Activities: MLAS 3.0 started with a keynote speech by Jadavpur
                University alumnus Saptarshi Ghosh, discussing product
                management. The event included an interactive session and Python
                workshop, followed by a workshop on Machine Learning
                fundamentals and unsupervised learning. On the second day,
                Saptarshi Pani introduced Deep Learning basics, followed by a
                hands-on project and quiz. Attendees participated in contests
                and received certificates. <br />
                <span className="font-bold">It was a whole day event</span>]
              </p>
            </div>
          </li>
          <li className="marker:text-xl marker:font-bold w-full">
            <div className="relative w-full">
              <p className="w-full">
                Write a short and attractive instagram caption for a post whose
                link can be found
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 text-sky-700"
                  href="https://www.instagram.com/reel/C0CP05pS7-F/?igsh=MWNqeTRnOW0wdzF6bA=="
                >
                  here
                </a>
              </p>
            </div>
          </li>
          <li className="marker:text-xl marker:font-bold">
            <div className="relative">
              <p className="">
                Write a statement of purpose to send to the IEEE Kolkata Section
                in order to seek funds for MLAS 4.0 [details of the event in
                question 2] It should be at least 1 page long.
              </p>
              <p>Sample SOP:</p>
              <p className="w-full">
                <a
                  href="https://docs.google.com/document/d/1vqN3fl2n_7CclkeOYGPm4rK6i2x7ilpkA6SUQgwVJCE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-700 inline"
                >
                  here
                </a>
              </p>
            </div>
          </li>
        </ol>
        <div className="flex flex-col gap-2 w-full">
          <p className="font-bold block w-full">BONUS TASK </p>
          <p>Give an idea sketch for an Instagram reel for TechX(short)</p>
          <p className="w-full">
            [ Hint :Techx, organized by IEEE JUSB, is a multi-day out-of-station
            event featuring workshops, seminars, and more.It is the flagship
            event of JUSB and is held in a resort outside Kolkata]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
