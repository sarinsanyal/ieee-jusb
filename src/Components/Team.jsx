import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Team() {
  const excom = [
    {
      id: 1,
      name: "Subhadip De",
      por: "Chairperson",
      image: "../../public/teams/Subhadip De.webp",
    },
    {
      id: 2,
      name: "Souvik Saha",
      por: "Vice-Chairperson",
      image: "../../public/teams/Souvik Saha.webp",
    },
    {
      id: 3,
      name: "Dipayan Bhattacharya",
      por: "Secretary",
      image: "../../public/teams/Dipayan Bhattacharyya.webp",
    },
    {
      id: 4,
      name: "Ashutosh Jha",
      por: "Treasurer",
      image: "../../public/teams/Ashutosh Jha.webp",
    },
    {
      id: 5,
      name: "Nazmus Saqib",
      por: "Webmaster",
      image: "../../public/teams/dummy.webp",
    },
    {
      id: 6,
      name: "Akash Bag",
      por: "Tech Lead",
      image: "../../public/teams/akash.webp",
    },
    {
      id: 7,
      name: "Debajoti Chakraborty",
      por: "Design Lead",
      image: "../../public/teams/Debajoti.webp",
    },
    {
      id: 8,
      name: "Adrija Mukherjee",
      por: "Content Lead",
      image: "../../public/teams/Adrija.webp",
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
      image: "../../public/teams/dummy.webp",
    },
    {
      id: 11,
      name: "Somenath Garai",
      por: "Sponsorship Lead",
      image: "../../public/teams/Somenath Garai.webp",
    },
  ];

  const tech = [
    {
      id: 1,
      name: "Abhinandan Roy",
      image: "../../public/teams/Abhinandan.webp",
    },
    {
      id: 2,
      name: "Sayan Sah",
      image: "../../public/teams/dummy.webp",
    },
    {
      id: 3,
      name: "Shakya Majumdar",
      image: "../../public/teams/Shakya.webp",
    },
    {
      id: 4,
      name: "Parijat Majumdar",
      image: "../../public/teams/Parijat.webp",
    },
    {
      id: 5,
      name: "Reejul Chattaraj",
      image: "../../public/teams/Reejul.webp",
    },
  ];
  const design = [
    {
      id: 1,
      name: "Anirban Das",
      image: "../../public/teams/Anirban.webp",
    },
    {
      id: 2,
      name: "Sadiq Siraj Ibrahim",
      image: "../../public/teams/Sadiq.webp",
    },
  ];

  const content = [
    {
      id: 1,
      name: "Adway Paul",
      image: "../../public/teams/dummy.webp",
    },
    {
      id: 2,
      name: "Architava Bhattacharya",
      image: "../../public/teams/Architava.webp",
    },
    {
      id: 3,
      name: "Debjyoti Nandi",
      image: "../../public/teams/Debjyoti Nandi.webp",
    },
    {
      id: 4,
      name: "Haimi Jha",
      image: "../../public/teams/haimi.webp",
    },
    {
      id: 5,
      name: "Sakshya Mukherjee",
      image: "../../public/teams/Shakshya.webp",
    },
    {
      id: 6,
      name: "Shankha Bhattacharya",
      image: "../../public/teams/shankha-bhattacharya.webp",
    },
    {
      id: 7,
      name: "Sumedha Ghosh Chowdhury",
      image: "../../public/teams/sumedha.webp",
    },
  ];

  const pr = [
    {
      id: 1,
      name: "Arka Roy",
      image: "../../public/teams/Arka.webp",
    },
    {
      id: 2,
      name: "Arpan Saha",
      image: "../../public/teams/arpan.webp",
    },
    {
      id: 3,
      name: "Arya Pandit",
      image: "../../public/teams/Arya.webp",
    },
  ];

  const logistics = [
    {
      id: 1,
      name: "Ayush Shankar",
      image: "../../public/teams/ayush-shankar.webp",
    },
    {
      id: 2,
      name: "Jyotishko Dey",
      image: "../../public/teams/Jyotishko.webp",
    },
    {
      id: 3,
      name: "Lokesh Bihani",
      image: "../../public/teams/lokesh-bihani.webp",
    },
    {
      id: 4,
      name: "Md Shahzaman",
      image: "../../public/teams/Md Shahzaman.webp",
    },
    {
      id: 5,
      name: "Tuhin Mallick",
      image: "../../public/teams/Tuhin.webp",
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
      <div className="card_container w-full grid items-center justify-center grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12 px-12">
        {excom.map((member) => (
          <div
            className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4"
            key={member.id}
          >
            <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
              <img
                src={`${member.image}`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
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

      <div className="relative w-full h-fit my-12 flex flex-col gap-4">
        <h2 className="relative text-center font-Josefin text-4xl font-semibold">
          IAS Chapter
        </h2>
        <div className="relative w-full h-fit px-12 flex flex-row">
          <div className="card_container relative w-full h-fit grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4">
            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/Rajarshi Mukherjee.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Rajarshi Mukherjee
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Vice-Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/disha.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Disha Das
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/dummy.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Azfar Hasan
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Secretary
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit my-12 flex flex-col gap-4">
        <h2 className="relative text-center font-Josefin text-4xl font-semibold">
          CS Chapter
        </h2>
        <div className="relative w-full h-fit px-12 flex flex-row">
          <div className="card_container relative w-full h-fit grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4">
            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/Subham Sinha.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Subham Sinha
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Vice-Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/Arka.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Arka Roy
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/Shakshya.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Sakshya Mukherjee
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Secretary
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit my-12 flex flex-col gap-4">
        <h2 className="relative text-center font-Josefin text-4xl font-semibold">
          WIE Section
        </h2>
        <div className="relative w-full h-fit px-12 flex flex-row">
          <div className="card_container relative w-full h-fit grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4">
            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/dummy.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Akansha Singh
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Vice-Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/Trisha Samanta.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Trisha Samanta
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/haimi.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Haima Jha
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Secretary
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit my-12 flex flex-col gap-4">
        <h2 className="relative text-center font-Josefin text-4xl font-semibold">
          COMSOC Society
        </h2>
        <div className="relative w-full h-fit px-12 flex flex-row">
          <div className="card_container relative w-full h-fit grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4">
            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/Jyotishko.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Jyotisko Dey
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Vice-Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/dummy.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Adway Paul
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/Sadiq.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Sadiq Siraj Ibrahim
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Secretary
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit my-12 flex flex-col gap-4">
        <h2 className="relative text-center font-Josefin text-4xl font-semibold">
          PES Society
        </h2>
        <div className="relative w-full h-fit px-12 flex flex-row">
          <div className="card_container relative w-full h-fit grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4">
            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/ayush-shankar.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Ayush Shankar
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Vice-Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/Abhinandan.webp"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Abhinandan Roy
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Chairperson
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>

            <div className="card w-[90%] h-[32rem] flex flex-col justify-between gap-4">
              <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
                <img
                  src="../../public/teams/sumedha.webp"
                  className="w-full h-full object-cover rotate-90"
                  alt=""
                />
              </div>
              <p className="text-center font-Josefin font-medium text-3xl">
                Sumedha Ghosh Chowdhury
              </p>
              <p className="relative uppercase font-bold font-Josefin text-2xl text-center">
                Secretary
              </p>
              <div className="flex flex-row justify-center items-center gap-12 text-3xl">
                <FaInstagram className="relative cursor-pointer" />
                <FaLinkedinIn className="relative cursor-pointer" />
                <FaXTwitter className="relative cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="relative text-center font-Josefin text-4xl font-semibold">
        Tech Team
      </h2>

      <div className="card_container w-full screen grid items-center justify-center grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12 px-12">
        {tech.map((member) => (
          <div
            className="card w-[90%] h-[28rem] flex flex-col justify-between gap-4"
            key={member.id}
          >
            <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
              <img
                src={`${member.image}`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <p className="text-center font-Josefin font-medium text-3xl">
              {member.name}
            </p>
            <div className="flex flex-row justify-center items-center gap-12 text-3xl">
              <FaInstagram className="relative cursor-pointer" />
              <FaLinkedinIn className="relative cursor-pointer" />
              <FaXTwitter className="relative cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
      <h2 className="relative text-center font-Josefin text-4xl font-semibold">
        Design Team
      </h2>

      <div className="card_container w-full screen grid items-center justify-center grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12 px-12">
        {design.map((member) => (
          <div
            className="card w-[90%] h-[28rem] flex flex-col justify-between gap-4"
            key={member.id}
          >
            <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
              <img
                src={`${member.image}`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <p className="text-center font-Josefin font-medium text-3xl">
              {member.name}
            </p>
            <div className="flex flex-row justify-center items-center gap-12 text-3xl">
              <FaInstagram className="relative cursor-pointer" />
              <FaLinkedinIn className="relative cursor-pointer" />
              <FaXTwitter className="relative cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="relative text-center font-Josefin text-4xl font-semibold">
        Content Team
      </h2>

      <div className="card_container w-full screen grid items-center justify-center grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12 px-12">
        {content.map((member) => (
          <div
            className="card w-[90%] h-[28rem] flex flex-col justify-between gap-4"
            key={member.id}
          >
            <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
              <img
                src={`${member.image}`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <p className="text-center font-Josefin font-medium text-3xl">
              {member.name}
            </p>
            <div className="flex flex-row justify-center items-center gap-12 text-3xl">
              <FaInstagram className="relative cursor-pointer" />
              <FaLinkedinIn className="relative cursor-pointer" />
              <FaXTwitter className="relative cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="relative text-center font-Josefin text-4xl font-semibold">
        PR Team
      </h2>

      <div className="card_container w-full screen grid items-center justify-center grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12 px-12">
        {pr.map((member) => (
          <div
            className="card w-[90%] h-[28rem] flex flex-col justify-between gap-4"
            key={member.id}
          >
            <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
              <img
                src={`${member.image}`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <p className="text-center font-Josefin font-medium text-3xl">
              {member.name}
            </p>
            <div className="flex flex-row justify-center items-center gap-12 text-3xl">
              <FaInstagram className="relative cursor-pointer" />
              <FaLinkedinIn className="relative cursor-pointer" />
              <FaXTwitter className="relative cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="relative text-center font-Josefin text-4xl font-semibold">
        Logistics Team
      </h2>

      <div className="card_container w-full screen grid items-center justify-center grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-12 px-12">
        {logistics.map((member) => (
          <div
            className="card w-[90%] h-[28rem] flex flex-col justify-between gap-4"
            key={member.id}
          >
            <div className="relative w-full h-[20rem] rounded-lg hover:scale-105 duration-300 overflow-hidden">
              <img
                src={`${member.image}`}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <p className="text-center font-Josefin font-medium text-3xl">
              {member.name}
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
