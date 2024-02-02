import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Team() {
  const excom = [
    {
      id: 1,
      name: "Subhadip De",
      por: "Chairperson",
      image: "",
    },
    {
      id: 2,
      name: "Souvik Saha",
      por: "Vice-Chairperson",
      image: "../../teams/Debajoti.webp",
    },
    {
      id: 3,
      name: "Dipayan Bhattacharya",
      por: "Secretary",
      image: "",
    },
    {
      id: 4,
      name: "Ashutosh Jha",
      por: "Treasurer",
      image: "",
    },
    {
      id: 5,
      name: "Nazmus Saqib",
      por: "Webmaster",
      image: "",
    },
    {
      id: 6,
      name: "Akash Bag",
      por: "Tech Lead",
      image: "",
    },
    {
      id: 7,
      name: "Debajoti Chakraborty",
      por: "Design Lead",
      image: "",
    },
    {
      id: 8,
      name: "Adrija Mukherjee",
      por: "Content Lead",
      image: "../../public/Adrija.webp",
    },
    {
      id: 9,
      name: "Sayandeep Sarkar",
      por: "PR Lead",
      image: "../../public/teams/Sayandeep.webp",
    },
    {
      id: 10,
      name: "Souvik Kirtania",
      por: "Logistic Lead",
      image: "",
    },
    {
      id: 11,
      name: "Somenath Garai",
      por: "Sponsorship Lead",
      image: "",
    },
  ];
  return (
    <section className="relative h-fit w-full flex flex-col gap-6 py-4">
      <h1 className="relative text-center font-Josefin text-4xl font-bold py-4">
        Our Team
      </h1>
      <h2 className="relative text-center font-Josefin text-4xl font-semibold">
        Executive Committee
      </h2>
      <div className="card_container w-full screen grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12 px-12">
        {excom.map((member) => (
          <div
            className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4"
            key={member.id}
          >
            <img
              src=""
              className="w-full object-cover rounded-lg hover:scale-105 duration-300"
              alt=""
            />
            <p className="text-center font-Josefin font-medium text-3xl">
              {member.name}
            </p>
            <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
              {member.por}
            </p>
            <div className="flex flex-row justify-center items-center gap-12 text-3xl">
              <FaInstagram className="relative cursor-pointer" />
              <FaLinkedinIn className="relative cursor-pointer" />
              <FaXTwitter className="relative cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
