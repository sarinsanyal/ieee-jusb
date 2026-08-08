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
      name: "Nazmus Saqib",
      por: "Chairperson",
      image: "../../teams/Nazmus Saqib.webp",
    },
    {
      id: 2,
      name: "Adrija Mukherjee",
      por: "Vice-Chairperson",
      image: "../../teams/Adrija.webp",
    },
    {
      id: 3,
      name: "Sakshya Mukherjee",
      por: "Secretary",
      image: "../../teams/Shakshya.webp",
    },
    {
      id:4,
      name: "Akash Bag",
      por: "Joint Secretary",
      image: "../../teams/AkashBag.webp",
    },
    {
      id: 5,
      name: "Haimi Jha",
      por: "Treasurer",
      image: "../../teams/haimi.webp",
    },
    {
      id:6,
      name: "Souvik Kirtania",
      por: "Joint Treasurer",
      image: "../../teams/Souvik_Kirtania.webp",
    },
    {
      id: 7,
      name: "Ahnik Purkait",
      por: "Webmaster",
      image: "../../teams/Ahnik.webp",
    },
    
    {
      id: 8,
      name: "Rahul Pandey",
      por: "Tech Lead",
      image: "../../teams/Rahul.webp",
    },
    {
      id: 9,
      name: "Shashwata Roy",
      por: "Design Lead",
      image: "../../teams/Shashwata.webp",
    },
    {
      id: 10,
      name: "Khushwant Pilaniwala",
      por: "Content Lead",
      image: "../../teams/Khushwant.webp",
    },
    {
      id: 11,
      name: "Mayukh Roy",
      por: "Outreach Lead",
      image: "../../teams/Mayukh_Roy.webp",
    },
    {
      id: 12,
      name: "Shaikh Shoaib Ahmed",
      por: "Logistic Lead",
      image: "../../teams/Shoaib.webp",
    },
  ];

  const tech = [
    {
      id: 1,
      name: "Akinchan Nayek",
      image: "../../teams/Akinchan_Nayek.webp",
    },
    {
      id: 2,
      name: "Shubham Shrivastav",
      image: "../../teams/Shubham_Shrivastav.webp",
    },
    {
      id: 3,
      name: "Swastik Saha ",
      image: "../../teams/Swastik_Saha.webp",
    },
    {
      id: 4,
      name: "Kaustav Dey",
      image: "../../teams/Kaustav_Dey.webp",
    },
    {
      id: 5,
      name: "Syamantak Mondal",
      image: "../../teams/Syamantak_Mondal.webp",
    },
    {
      id: 6,
      name: "Shirsho saha",
      image: "../../teams/Shirsho_Saha.webp",
    },
    {
      id: 7,
      name: "Anurag Biswas",
      image: "../../teams/Anurag_Biswas.webp",
    },
    {
      id: 8,
      name: "NARAYAN SHARAN",
      image: "../../teams/NARAYAN_SHARAN.webp",
    },
  ];
  
  const design = [
    {
      id: 1,
      name: "Rudra Ray",
      image: "../../teams/Rudra_Ray.webp",
    },
    {
      id: 2,
      name: "Tapomoy Sarkar",
      image: "../../teams/Tapomoy_Sarkar.webp",
    },
    {
      id: 3,
      name: "Asmita Rakshit",
      image: "../../teams/Asmita_Rakshit.webp",
    },
    {
      id: 4,
      name: "Rhiddhiman Chakraborty",
      image: "../../teams/Rhiddhiman_Chakraborty.webp",
    },
    {
      id: 5,
      name: "Somdatta Kirtania",
      image: "../../teams/Somdatta_Kirtania.webp",
    },
    {
      id: 6,
      name: "Adarsha Ghosh",
      image: "../../teams/Adarsha_Ghosh.webp",
    },
    {
      id: 7,
      name: "Somenath Jana",
      image: "../../teams/Somenath_Jana.webp",
    },
    {
      id: 8,
      name: "Shiksha Agarwal",
      image: "../../teams/Shiksha_Agarwal.webp",
    },
  ];

  const content = [
    {
      id: 1,
      name: "Debaditya Ghosh",
      image: "../../teams/Debaditya.webp",
    },
    {
      id: 2,
      name: "Riyana Roy",
      image: "../../teams/Riyana.webp",
    },
    {
      id: 3,
      name: "Sombrata Biswas",
      image: "../../teams/Sombrata.webp",
    },
    {
      id: 4,
      name: "Sohini Pal",
      image: "../../teams/Sohini Pal.webp",
    },
    {
      id: 5,
      name: "Aayushi Ghosh",
      image: "../../teams/Aayushi_Ghosh.webp",
    },
    {
      id: 6,
      name: "Antariksh Sengupta",
      image: "../../teams/Antariksh_Sengupta.webp",
    },
    {
      id: 7,
      name: "Sreetama Pal",
      image: "../../teams/Sreetama_Pal.webp",
    },
    {
      id: 8,
      name: "Ayurdyuti Ghosh",
      image: "../../teams/Ayurdyuti_Ghosh.webp",
    },
    {
      id: 9,
      name: "Soham Neogi",
      image: "../../teams/Soham_Neogi.webp",
    },
    {
      id: 10,
      name: "Sanglap Das",
      image: "../../teams/Sanglap_Das.webp",
    },
    {
      id: 11,
      name: "Pratyasha Pal",
      image: "../../teams/Pratyasha_Pal.webp",
    },
    {
      id: 12,
      name: "Sujapa Bhattacharya",
      image: "../../teams/Sujapa_Bhattacharya.webp",
    },
  ];

  const pr = [
    {
      id : 1,
      name: "Subham Dalai",
      image: "../../teams/Subham.webp",
    },
    {
      id: 2,
      name: "Alankrita Paul",
      image: "../../teams/Alankrita.webp",
    },
    {
      id: 3,
      name: "Aneesh Banerjee",
      image: "../../teams/Aneesh.webp",
    },
    {
      id: 4,
      name: "Pratham Das",
      image: "../../teams/Pratham_Das.webp",
    },
    {
      id: 5,
      name: "Sayandeep Sarkar",
      image: "../../teams/Sayandeep.webp",
    },
    {
      id: 6,
      name: "Sagnik Ghosh",
      image: "../../teams/Sagnik_Ghosh.webp",
    },
    {
      id: 7,
      name: "Tanmay Sarkar",
      image: "../../teams/Tanmay_Sarkar.webp",
    },
    {
      id: 8,
      name: "Supratim Chakraborty",
      image: "../../teams/Supratim_Chakraborty.webp",
    },
    {
      id: 9,
      name: "Anirban Misra",
      image: "../../teams/Anirban_Misra.webp",
    },
    {
      id: 10,
      name: "Souranil Sen",
      image: "../../teams/Souranil_Sen.webp",
    },
    {
      id: 11,
      name: "Sourjya Mitra",
      image: "../../teams/Sourjya_Mitra.webp",
    },
    {
      id: 12,
      name: "Arkaroop Nag",
      image: "../../teams/Arkaroop_Nag.webp",
    },
    {
      id: 13,
      name: "Antariksh Singh",
      image: "../../teams/Antariksh_Singh.webp",
    },
    {
      id: 14,
      name: "Ashmit Sinha",
      image: "../../teams/Ashmit_Sinha.webp",
    },
    {
      id: 15,
      name: "Niladri Bhowmick",
      image: "../../teams/Niladri_Bhowmick.webp",
    },
  ];

  const logistics = [
    {
      id: 1,
      name: "Debraj Chakraborty",
      image: "../../teams/Debraj_Chakraborty.webp",
    },
    {
      id: 2,
      name: "Apurba Samanta",
      image: "../../teams/Apurba_Samanta.webp",
    },
    {
      id: 3,
      name: "Koushik Swar",
      image: "../../teams/Koushik_Swar.webp",
    },
    {
      id: 4,
      name: "Sabyasachi Majumdar",
      image: "../../teams/Sabyasachi_Majumdar.webp",
    },
    {
      id: 5,
      name: "Soham Pal",
      image: "../../teams/Soham_Pal.webp",
    },
    {
      id: 6,
      name: "Sreya Sarkar",
      image: "../../teams/Sreya_Sarkar.webp",
    },
    {
      id: 7,
      name: "Subhojit Roy",
      image: "../../teams/Subhojit_Roy.webp",
    },
    {
      id: 8,
      name: "Arindam Das",
      image: "../../teams/Arindam_Das.webp",
    },
    {
      id: 9,
      name: "Arjya Bhattacharyya",
      image: "../../teams/Arjya_Bhattacharyya.webp",
    },
    {
      id: 10,
      name: "Mayank Jindal",
      image: "../../teams/Mayank_Jindal.webp",
    },
    {
      id: 11,
      name: "Adwitiya Kar",
      image: "../../teams/Adwitiya_Kar.webp",
    },
    {
      id: 12,
      name: "Soham Dekhan",
      image: "../../teams/Soham_DeKhan.webp",
    },
  ];

  const iasChapter = [
    {
      id: 1,
      name: "Debajoti Chakraborty",
      por: "Chairperson",
      image: "../../teams/Debajoti.webp",
    },
    {
      id: 2,
      name: "Aishani Roy",
      por: "Vice-Chairperson",
      image: "../../teams/Aishani.webp",
    },
    {
      id: 3,
      name: "Naman Kumar Lilha",
      por: "Secretary",
      image: "../../teams/dummy.webp",
    },
  ];
  const csChapter = [
    {
      id: 1,
      name: "Akash Bag",
      por: "Chairperson",
      image: "../../teams/AkashBag.webp",
    },
    {
      id: 2,
      name: "Nilangshu Bhattacharya",
      por: "Vice-Chairperson",
      image: "../../teams/Nilangshu.webp",
    },
    {
      id: 3,
      name: "Pratham Das",
      por: "Secretary",
      image: "../../teams/Pratham_Das.webp",
    },
  ];
  const wieSection = [
    {
      id: 1,
      name: "Sumedha Ghosh Chowdhury",
      por: "Chairperson",
      image: "../../teams/sumedha.webp",
    },
    {
      id: 2,
      name: "Alankrita Paul",
      por: "Vice-Chairperson",
      image: "../../teams/Alankrita.webp",
    },
    {
      id: 3,
      name: "Sohini Pal",
      por: "Secretary",
      image: "../../teams/Sohini Pal.webp",
    },
  ];
  const comsoc = [
    {
      id: 1,
      name: "Shrinjita Biswas",
      por: "Chairperson",
      image: "../../teams/Shrinjita.webp",
    },
    {
      id: 2,
      name: "Sombrata Biswas",
      por: "Vice-Chairperson",
      image: "../../teams/Sombrata.webp",
    },
    {
      id: 3,
      name: "Avisikta Guria",
      por: "Secretary",
      image: "../../teams/Avisikta.webp",
    },
  ];
  const PES = [
    {
      id: 1,
      name: "Aneesh Banerjee",
      por: "Chairperson",
      image: "../../teams/Aneesh.webp",
    },
    {
      id: 2,
      name: "Aayushi Ghosh",
      por: "Vice-Chairperson",
      image: "../../teams/Aayushi_Ghosh.webp",
    },
    {
      id: 3,
      name: "Debaditya Ghosh",
      por: "Secretary",
      image: "../../teams/Debaditya.webp",
    },
  ];
const sps=[
  {
    id: 1,
    name:"Shakya Majumdar",
    por:"Chairperson",
    image: "../../teams/Shakya.webp",
  },
  {
    id: 2,
    name:"Trishit Deb Sharma",
    por:"Vice-Chairperson",
    image:"../../teams/Trishit.webp"
  },
  {
    id:3,
    name:"Arkajyoti Chakraborty",
    por:"Secretary",
    image:"../../teams/dummy.webp"
  }
]
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
      name:"SPS",
      data:sps,

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
      name: "Outreach Team",
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
    <section className="relative h-fit w-full flex flex-col gap-5 py-4 dark:bg-[#001523] dark:text-[#c5e3f5]">
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
                <div className="relative w-[80%] h-[20rem] text-center rounded-2xl transition-all hover:scale-105 duration-300 ease-in-out overflow-hidden mx-auto">
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
