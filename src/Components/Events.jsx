// import React from "react";
import { Link } from "react-router-dom";

import items from "../assets/data/events.json";
import PageWrapper from "./PageWrapper";

export default function Events() {
    return (
        <PageWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5 mx-auto py-20">
            {items.map((item) => (
                <div className="card relative w-[90%] h-[44rem] border-2 rounded-2xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]" key={item.id}>
                    <div className="image_container w-full overflow-hidden rounded-bl-[20%] rounded-br-[50%]">
                        <img
                            src={item.img}
                            className="w-full hover:scale-110 duration-300"
                            alt=""
                        />
                    </div>

                    <div className="w-[96%] min-h-fit px-4 flex flex-col gap-4 pt-4">
                        <p className="relative font-Inclusive text-4xl">{item.name}</p>
                        <hr className="relative border-slate-700 border-2" />
                        <p className="relative font-Josefin text-lg">
                            {item.description}
                        </p>
                        <Link
                            to={item.link}
                            target="_blank"
                            className="absolute bottom-12 text-black bg-cyan-500 rounded-md hover:bg-cyan-700 duration-200 mx-auto my-4 px-6 py-3 font-Josefin font-semibold text-lg"
                        >
                            Website
                        </Link>
                    </div>

                    <div className="absolute bottom-0 w-full bg-white px-4 py-2 font-Inclusive text-lg border-t-2">
                        Date: {item.date}
                    </div>
                </div>
            ))}

        </div>
        </PageWrapper>
    );
}
