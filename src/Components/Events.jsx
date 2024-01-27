// import React from "react";
import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 mx-auto py-20">
      <div className="card relative w-[90%] max-h-fit border-2 rounded-2xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="image_container w-full overflow-hidden rounded-bl-[20%] rounded-br-[50%]">
          <img
            src="../../public/events/helloieee.webp"
            className="w-full hover:scale-110 duration-300"
            alt=""
          />
        </div>

        <div className="w-[96%] px-4 flex flex-col gap-4 pt-4">
          <p className="relative font-Inclusive text-4xl">Hello IEEE</p>
          <hr className="relative border-slate-700 border-2" />
          <p className="relative font-Josefin text-lg">
            Unrivaled and unparalleled, Hello-IEEE stands true to its name:
            Introducing the myriad boons of IEEE to young enthusiasts yet to
            blossom into leaders of tomorrow and seamlessly bridging the gap
            between industry and academia through its unique array of events.
          </p>
          <Link
            to={"https://ieee-jaduniv.in/hello-IEEE/"}
            target="_blank"
            className="text-black bg-cyan-500 rounded-md hover:bg-cyan-700 duration-200 mx-auto my-4 px-6 py-3 font-Josefin font-semibold text-lg"
          >
            Website
          </Link>
        </div>

        <div className="absolute bottom-0 w-full bg-white px-4 py-2 font-Inclusive text-lg border-t-2">
          Date: 14th September, 2022
        </div>
      </div>
      <div className="card relative w-[90%] h-[42rem] border-2 rounded-2xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="image_container w-full overflow-hidden rounded-bl-[20%] rounded-br-[50%]">
          <img
            src="../../public/events/elevatex2.webp"
            className="w-full hover:scale-110 duration-300"
            alt=""
          />
        </div>

        <div className="w-[96%] px-4 flex flex-col gap-4 pt-4">
          <p className="relative font-Inclusive text-4xl">ElevateX 2.0</p>
          <hr className="relative border-slate-700 border-2" />
          <p className="relative font-Josefin text-lg">
            ElevateX 2.0 is the second edition of elevateX an all-in-one
            mentoring session by IEEE JU SB members. Be it research or industry,
            be it competitive coding, or soft skill development, we have tracks
            tailor-made for your needs, complete with doubt-clearing, quick
            contests, real-world problems and webinars by field experts.
          </p>
          <Link
            to={"https://ieee-jaduniv.in/hello-IEEE/"}
            target="_blank"
            className="relative text-black bg-cyan-500 rounded-md hover:bg-cyan-700 duration-200 mx-auto mb-4 px-6 py-3 font-Josefin font-semibold text-lg"
          >
            Website
          </Link>
        </div>

        <div className="absolute bottom-0 w-full bg-white px-4 py-2 font-Inclusive text-lg border-t-2">
          Date: 31st July - 22nd August, 2021
        </div>
      </div>
      <div className="card relative w-[90%] h-[42rem] border-2 rounded-2xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="image_container w-full overflow-hidden rounded-bl-[20%] rounded-br-[50%]">
          <img
            src="../../events/double.webp"
            className="w-full hover:scale-110 duration-300"
            alt=""
          />
        </div>

        <div className="w-[96%] px-4 flex flex-col gap-4 pt-4">
          <p className="relative font-Inclusive text-4xl">Double // Slash</p>
          <hr className="relative border-slate-700 border-2" />
          <p className="relative font-Josefin text-lg">
            “DoubleSlash - Code.Commit.Create” was a monumental 48-hour long
            Hackathon organized by the IEEE Jadavpur University Student Branch,
            IEEE Young Professionals Kolkata section and IEEE Computer Society
            Kolkata section. This was the first event in 2021.
          </p>
          <Link
            to={"https://ieee-jaduniv.in/hello-IEEE/"}
            target="_blank"
            className="text-black bg-cyan-500 rounded-md hover:bg-cyan-700 duration-200 mx-auto my-4 px-6 py-3 font-Josefin font-semibold text-lg"
          >
            Website
          </Link>
        </div>

        <div className="absolute bottom-0 w-full bg-white px-4 py-2 font-Inclusive text-lg border-t-2">
          Date: 9th - 11th July, 2021
        </div>
      </div>

      <div className="card relative w-[90%] h-[42rem] border-2 rounded-2xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="image_container w-full overflow-hidden rounded-bl-[20%] rounded-br-[50%]">
          <img
            src="../../public/events/pass-the-mic.webp"
            className="w-full hover:scale-110 duration-300"
            alt=""
          />
        </div>

        <div className="w-[96%] px-4 flex flex-col gap-4 pt-4">
          <p className="relative font-Inclusive text-4xl">Pass the Mic</p>
          <hr className="relative border-slate-700 border-2" />
          <p className="relative font-Josefin text-lg">
            A five week specially curated podcast series, organized by IEEE
            Student Branch, Pass the Mic aimed at providing the audience a with
            an in-depth understanding of some of the most intriguing topics,
            with an assorted lineup of some pioneers in the field.
          </p>
          <Link
            to={"https://ieee-jaduniv.in/hello-IEEE/"}
            target="_blank"
            className="text-black bg-cyan-500 rounded-md hover:bg-cyan-700 duration-200 mx-auto my-4 px-6 py-3 font-Josefin font-semibold text-lg"
          >
            Website
          </Link>
        </div>

        <div className="absolute bottom-0 w-full bg-white px-4 py-2 font-Inclusive text-lg border-t-2">
          Date: 18th December, 2020
        </div>
      </div>
    </div>
  );
}
