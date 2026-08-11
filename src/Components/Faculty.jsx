import { useEffect } from "react";
import nibaranImg from "../assets/faculty/NibaranDasSir.webp";

export default function Faculty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facultyList = [
    {
      id: 1,
      name: "Nibaran Das",
      por: "Branch Councellor",
      pos: "Professor, Dept of CSE, Jadavpur University",
      image: nibaranImg,  
    },
  ];

  return (
    <section className="relative h-fit w-full flex flex-col gap-5 py-4 dark:bg-[#001523] dark:text-[#c5e3f5]">
      <h1 className="relative py-3 text-4xl font-bold text-center font-Josefin">
        Faculty in Charge
      </h1>

      <div className="w-[100%] flex flex-wrap items-center justify-center gap-y-12 px-5 mx-auto">
        {facultyList?.map((member) => (
          <div
            className="card w-[20rem] h-[32rem] flex flex-col justify-evenly mx-auto"
            key={member.id}
          >
            <div className="relative w-[80%] h-[20rem] text-center rounded-2xl transition-all hover:scale-105 duration-300 ease-in-out overflow-hidden mx-auto">
              <img
                src={`${member.image}`}
                className="object-cover w-full h-full"
                alt={member.name}
              />
            </div>
            <p className="text-center font-Josefin font-bold text-[1.5rem]">
              {member.name}
            </p>
            <p className="text-center font-Josefin font-bold text-[1.5rem]">
              {member.por}
            </p>
            {member.pos && (
              <p className="relative text-lg font-medium text-center uppercase font-Josefin">
                {member.pos}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}