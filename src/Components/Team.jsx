import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";



export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const excom = [
    {
      id: 1,
      name: "Subhadip De",
      por: "Chairperson",
      image: "../../teams/SubhadipDe.webp",
    },
    {
      id: 2,
      name: "Souvik Saha",
      por: "Vice-Chairperson",
      image: "../../teams/Souvik Saha.webp",
    },
    {
      id: 3,
      name: "Dipayan Bhattacharya",
      por: "Secretary",
      image: "../../teams/Dipayan Bhattacharyya.webp",
    },
    {
      id: 4,
      name: "Ashutosh Jha",
      por: "Treasurer",
      image: "../../teams/Ashutosh Jha.webp",
    },
    {
      id: 5,
      name: "Nazmus Saqib",
      por: "Webmaster",
      image: "../../teams/Nazmus Saqib.webp",
    },
    {
      id: 6,
      name: "Akash Bag",
      por: "Tech Lead",
      image: "../../teams/AkashBag.webp",
    },
    {
      id: 7,
      name: "Debajoti Chakraborty",
      por: "Design Lead",
      image: "../../teams/Debajoti.webp",
    },
    {
      id: 8,
      name: "Adrija Mukherjee",
      por: "Content Lead",
      image: "../../teams/Adrija.webp",
    },
    {
      id: 9,
      name: "Sayandeep Sarkar",
      por: "PR Lead",
      image: "../../teams/Sayandeep.webp",
    },
    {
      id: 10,
      name: "Souvik Kirtania",
      por: "Logistic Lead",
      image: "../../teams/dummy.webp",
    },
    {
      id: 11,
      name: "Somenath Garai",
      por: "Sponsorship Lead",
      image: "../../teams/Somenath Garai.webp",
    },
  ];

  const tech = [
    {
      id: 1,
      name: "Abhinandan Roy",
      image: "../../teams/Abhinandan.webp",
    },
    {
      id: 2,
      name: "Sayan Sah",
      image: "../../teams/dummy.webp",
    },
    {
      id: 3,
      name: "Shakya Majumdar",
      image: "../../teams/Shakya.webp",
    },
    {
      id: 4,
      name: "Shamoyita Datta",
      image: "../../teams/Shamoyita.webp",
    },
    {
      id: 5,
      name: "Parijat Majumdar",
      image: "../../teams/Parijat.webp",
    },
    {
      id: 6,
      name: "Reejul Chattaraj",
      image: "../../teams/Reejul.webp",
    },
    {
      id: 7,
      name: "Rahul Pandey",
      image: "../../teams/Rahul.webp",
    },
    {
      id: 8,
      name: "Nilangshu Bhattacharyya",
      image: "../../teams/Nilangshu.webp",
    },
    {
      id: 9,
      name: "Abhishek Bhattacharjee",
      image: "../../teams/Abhishek.webp",
    },
    {
      id: 10,
      name: "Arka Dutta",
      image: "../../teams/ArkaDutta.webp",
    },
    {
      id: 11,
      name: "Ahnik Purkait",
      image: "../../teams/Ahnik.webp",
    },
    {
      id: 12,
      name: "Wrick Pal",
      image: "../../teams/Wrick.webp",
    },
    {
      id: 13,
      name: "Aindree Chatterjee",
      image: "../../teams/Aindree.webp",
    },
    {
      id: 14,
      name: "Soham Saha",
      image: "../../teams/Soham.webp",
    },
    {
      id: 15,
      name: "Trishit Debsharma",
      image: "../../teams/Trishit.webp",
    },
    {
      id: 16,
      name: "Abhirup Guha Roy",
      image: "../../teams/Abhirup.webp",
    },
    {
      id: 17,
      name: "Somnath Chattaraj",
      image: "../../teams/Somnath.webp",
    },
    {
      id: 18,
      name: "Kushaj Mallick",
      image: "../../teams/Kushaj.webp",
    },
  ];
  const design = [
    {
      id: 1,
      name: "Anirban Das",
      image: "../../teams/Anirban.webp",
    },
    {
      id: 2,
      name: "Sadiq Siraj Ibrahim",
      image: "../../teams/Sadiq.webp",
    },
    {
      id: 3,
      name: "Saklin Haque",
      image: "../../teams/dummy.webp",
    },
    {
      id: 4,
      name: "Apurba Nandi",
      image: "../../teams/Apurba.webp",
    },
    {
      id: 5,
      name: "Tanushree Sarkar",
      image: "../../teams/Tanushree.webp",
    },
    {
      id: 6,
      name: "Avisikta Guria",
      image: "../../teams/Avisikta.webp",
    },
    {
      id: 7,
      name: "Shrinjita Biswas",
      image: "../../teams/Shrinjita.webp",
    },
    {
      id: 8,
      name: "Aneesh Banerjee",
      image: "../../teams/Aneesh-design.webp",
    },
    {
      id: 9,
      name: "Shashwata Roy",
      image: "../../teams/Shashwata.webp",
    },
  ];

  const content = [
    {
      id: 1,
      name: "Adway Paul",
      image: "../../teams/dummy.webp",
    },
    {
      id: 2,
      name: "Architava Bhattacharya",
      image: "../../teams/Architava.webp",
    },
    {
      id: 3,
      name: "Debjyoti Nandi",
      image: "../../teams/Debjyoti Nandi.webp",
    },
    {
      id: 4,
      name: "Haimi Jha",
      image: "../../teams/haimi.webp",
    },
    {
      id: 5,
      name: "Sakshya Mukherjee",
      image: "../../teams/Shakshya.webp",
    },
    {
      id: 6,
      name: "Shankha Bhattacharya",
      image: "../../teams/shankha-bhattacharya.webp",
    },
    {
      id: 7,
      name: "Sumedha Ghosh Chowdhury",
      image: "../../teams/sumedha.webp",
    },
  ];

  const pr = [
    {
      id: 1,
      name: "Arka Roy",
      image: "../../teams/Arka.webp",
    },
    {
      id: 2,
      name: "Arpan Saha",
      image: "../../teams/arpan.webp",
    },
    {
      id: 3,
      name: "Arya Pandit",
      image: "../../teams/Arya.webp",
    },
    {
      id : 4,
      name: "Subham Dalai",
      image: "../../teams/Subham.webp",
    },
    {
      id: 5,
      name: "Utpalendu Ray",
      image: "../../teams/Utpalendu.webp",
    },
    {
      id: 6,
      name: "Alankrita Paul",
      image: "../../teams/Alankrita.webp",
    },
    {
      id: 7,
      name: "Aneesh Banerjee",
      image: "../../teams/Aneesh.webp",
    },
    {
      id: 8,
      name : "Soham Chakraborty",
      image: "../../teams/Soham Chakraborty.webp",
    },
    {
      id: 9,
      name: "Mayukh Roy",
      image: "../../teams/Mayukh-Roy.webp",
    },
    {
      id: 10,
      name: "Ankan Roy",
      image: "../../teams/Ankan-Roy.webp",
    },
    {
      id: 11,
      name: "Soham Chatterjee",
      image: "../../teams/Soham-Chatterjee.webp",
    },

  ];

  const logistics = [
    {
      id: 1,
      name: "Ayush Shankar",
      image: "../../teams/ayush-shankar.webp",
    },
    {
      id: 2,
      name: "Jyotishko Dey",
      image: "../../teams/Jyotishko.webp",
    },
    {
      id: 3,
      name: "Lokesh Bihani",
      image: "../../teams/lokesh-bihani.webp",
    },
    {
      id: 4,
      name: "Md Shahzaman",
      image: "../../teams/Md Shahzaman.webp",
    },
    {
      id: 5,
      name: "Tuhin Mallick",
      image: "../../teams/Tuhin.webp",
    },
    {
      id: 6,
      name: "Agniva Paul",
      image: "../../teams/Agniva.webp",
    },
    {
      id: 7,
      name: "Soumodip pramanick",
      image: "../../teams/Soumadip.webp",
    },
    {
      id: 8,
      name: "Sohini Hazra",
      image: "../../teams/Sohini.webp",
    },
    {
      id: 9,
      name: "Ankush Agarwala",
      image: "../../teams/Ankush.webp",
    },
    {
      id: 10,
      name: "Amit Dhibar",
      image: "../../teams/Amit.webp",
    },
    {
      id: 11,
      name: "Shaikh Shoaib Ahmed",
      image: "../../teams/Shoaib.webp", 
    },
    {
      id: 12,
      name: "Sneha Ghosh",
      image: "../../teams/Sneha.webp",
    },
    {
      id: 13,
      name: "Arnik Paul",
      image: "../../teams/Arnik.webp",
    },
    {
      id: 14,
      name: "Aishani Roy",
      image: "../../teams/Aishani.webp",
    },
    {
      id: 15,
      name: "Monodeep Mondal",
      image: "../../teams/Monodeep.webp",
    }, 
    {
      id: 16,
      name: "Manosrija Nasrin",
      image: "../../teams/Manosrija.webp",
    },
    {
      id: 17,
      name: "Soham Roy",
      image: "../../teams/Soham-logistics.webp",
    }
  ];

  const iasChapter = [
    {
      id: 1,
      name: "Disha Das",
      por: "Chairperson",
      image: "../../teams/disha.webp",
    },
    {
      id: 2,
      name: "Rajarshi Mukherjee",
      por: "Vice-Chairperson",
      image: "../../teams/Rajarshi Mukherjee.webp",
    },
    {
      id: 3,
      name: "Azfar Hasan",
      por: "Secretary",
      image: "../../teams/dummy.webp",
    },
  ];
  const csChapter = [
    {
      id: 1,
      name: "Arka Roy",
      por: "Chairperson",
      image: "../../teams/Arka.webp",
    },
    {
      id: 2,
      name: "Subham Sinha",
      por: "Vice-Chairperson",
      image: "../../teams/Subham Sinha.webp",
    },
    {
      id: 3,
      name: "Sakshya Mukherjee",
      por: "Secretary",
      image: "../../teams/Shakshya.webp",
    },
  ];
  const wieSection = [
    {
      id: 1,
      name: "Trisha Samanta",
      por: "Chairperson",
      image: "../../teams/Trisha Samanta.webp",
    },
    {
      id: 2,
      name: "Akansha Singh",
      por: "Vice-Chairperson",
      image: "../../teams/dummy.webp",
    },
    {
      id: 3,
      name: "Haima Jha",
      por: "Secretary",
      image: "../../teams/haimi.webp",
    },
  ];
  const comsoc = [
    {
      id: 1,
      name: "Adway Paul",
      por: "Chairperson",
      image: "../../teams/dummy.webp",
    },
    {
      id: 2,
      name: "Jyotishko Dey",
      por: "Vice-Chairperson",
      image: "../../teams/Jyotishko.webp",
    },
    {
      id: 3,
      name: "Sadiq Siraj Ibrahim",
      por: "Secretary",
      image: "../../teams/Sadiq.webp",
    },
  ];
  const PES = [
    {
      id: 1,
      name: "Abhinandan Roy",
      por: "Chairperson",
      image: "../../teams/Abhinandan.webp",
    },
    {
      id: 2,
      name: "Ayush Shankar",
      por: "Vice-Chairperson",
      image: "../../teams/ayush-shankar.webp",
    },
    {
      id: 3,
      name: "Sumedha Ghosh Chowdhury",
      por: "Secretary",
      image: "../../teams/sumedha.webp",
    },
  ];

  const Branch = [
    {
      name: "Executive Committee",
      data: excom,
    },
    {
      name: "IAS Chapter",
      data: iasChapter,
    },
    {
      name: "CS Chapter",
      data: csChapter,
    },
    {
      name: "WIE Section",
      data: wieSection,
    },
    {
      name: "COMSOC Society",
      data: comsoc,
    },
    {
      name: "PES",
      data: PES,
    },
    {
      name: "Tech Team",
      data: tech,
    },
    {
      name: "Design Team",
      data: design,
    },
    {
      name: "PR Team",
      data: pr,
    },
    {
      name: "Content Team",
      data: content,
    },
    {
      name: "Logistics Team",
      data: logistics,
    },
  ];

  return (
    <section className="relative h-fit w-full flex flex-col gap-5 py-4">
      <h1 className="relative text-center font-Josefin text-4xl font-bold py-3">
        Our Team
      </h1>
      {Branch?.map((branch) => (
        <div key={branch.name}>
          <h2 className="relative text-center font-Josefin text-4xl font-semibold p-5">
            {branch.name}
          </h2>
          <div
            className={`w-[100%] flex flex-wrap items-center justify-between gap-y-12 px-5 mx-auto`}
          >
            {branch?.data?.map((member) => (
              <div
                className="card w-[20rem] h-[32rem] flex flex-col justify-evenly mx-auto"
                key={member.id}
              >
                <div className="relative w-[80%] h-[20rem] text-center rounded-2xl hover:scale-105 duration-300 overflow-hidden mx-auto">
                  <img
                    src={`${member.image}`}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <p className="text-center font-Josefin font-bold text-[1.5rem]">
                  {member.name}
                </p>
                {member.por && (
                  <p className="relative uppercase font-medium font-Josefin text-lg text-center">
                    {member.por}
                  </p>
                )}
                <div className="flex flex-row justify-center items-center gap-8 text-2xl">
                  <FaInstagram className="relative cursor-pointer"  />
                  <FaLinkedinIn className="relative cursor-pointer" />
                  <FaXTwitter className="relative cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
