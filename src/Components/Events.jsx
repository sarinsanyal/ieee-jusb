import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import items from "../assets/data/events.json";
import PageWrapper from "./PageWrapper";
import ReactPaginate from "react-paginate";

const itemsPerPage = 6;

export default function Events() {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    const eventsSection = document.querySelector(".events-container");

    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setItemOffset(newOffset);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col justify-center w-full dark:bg-[#002238] events-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-4/5 px-4 py-20 mx-auto min-h-[800px]">
          {currentItems.map((item) => (
            <EventCard
              key={item.id}
              item={item}
              className="w-full h-full"
              style={{ minHeight: "48rem" }}
            />
          ))}
        </div>
        <div className="pagination-container">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="previous"
            nextClassName="next"
            breakClassName="break"
            activeClassName="selected"
            disabledClassName="disabled"
          />
        </div>
      </div>
    </PageWrapper>
  );
}

export function EventCard({ item }) {
  return (
    <div
      className="dark:bg-[#0f6ba935] card relative w-[90%] h-[48rem] border-2 dark:border-none rounded-2xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
      key={item.id}
    >
      <div className="image_container w-full overflow-hidden rounded-bl-[20%] rounded-br-[50%] bg-black">
        <img
          src={item.img}
          className="w-full transition-all hover:scale-110 duration-300 aspect-video object-contain"
          alt=""
        />
      </div>

      <div className="w-[96%] min-h-fit px-4 flex flex-col gap-4 pt-4">
        <p className="relative font-Inclusive  dark:text-white text-4xl text-center">
          {item.name}
        </p>
        <hr className="relative border-slate-700 dark:border-slate-200 border-2" />
        <p className="relative font-Josefin  dark:text-white text-lg">
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
  );
}
