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
      name: "Khushwant Pilaniwala",
      por: "Chairperson",
      image: "../../teams/Khushwant.webp",
    },
    {
      id: 2,
      name: "Mayukh Roy",
      por: "Vice-Chairperson",
      image: "../../teams/Mayukh_Roy.webp",
    },
    {
      id: 3,
      name: "Aneesh Banerjee",
      por: "Secretary",
      image: "../../teams/Aneesh.webp",
    },
    {
      id: 4,
      name: "Alankrita Paul",
      por: "Joint Secretary",
      image: "../../teams/Alankrita.webp",
    },
    {
      id: 5,
      name: "Pratham Das",
      por: "Treasurer",
      image: "../../teams/Pratham_Das.webp",
    },
    {
      id: 6,
      name: "Shrinjita Biswas",
      por: "Joint Treasurer",
      image: "../../teams/Shrinjita.webp",
    },
    {
      id: 7,
      name: "Rahul Pandey",
      por: "Webmaster",
      image: "../../teams/Rahul.webp",
    },
    {
      id: 8,
      name: "Sarin Sanyal",
      por: "Technical Lead",
      image: "../../teams/Sarin_Sanyal.webp",
    },
    {
      id: 9,
      name: "Supratim Chakraborty",
      por: "Outreach Lead",
      image: "../../teams/Supratim_Chakraborty.webp",
    },
    {
      id: 10,
      name: "Harsh Verma",
      por: "Design Lead",
      image: "../../teams/Harsh_Verma.webp",
    },
    {
      id: 11,
      name: "Ayurdyuti Ghosh",
      por: "Content Lead",
      image: "../../teams/Ayurdyuti_Ghosh.webp",
    },
    {
      id: 12,
      name: "Mrittika Biswas",
      por: "Logistics Lead",
      image: "../../teams/Mrittika_Biswas.webp",
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
      name: "Aayush Dey",
      image: "../../teams/Aayush_Dey.webp",
    },
    {
      id: 2,
      name: "Sidhorishi Das",
      image: "../../teams/Sidhorishi_Das.webp",
    },
    {
      id: 3,
      name: "Mainak Bera",
      image: "../../teams/Mainak_Bera.webp",
    },
    {
      id: 4,
      name: "Aynesh Ganguly",
      image: "../../teams/Aynesh_Ganguly.webp",
    },
    {
      id: 5,
      name: "Hemjit Saha",
      image: "../../teams/Hemjit_Saha.webp",
    },
    {
      id: 6,
      name: "Koustav Roy",
      image: "../../teams/Koustav_Roy.webp",
    },
  ];

  const pr = [
    {
      id: 1,
      name: "Niladri Bhowmick",
      image: "../../teams/Niladri_Bhowmick.webp",
    },
    {
      id: 2,
      name: "Tanmay Sarkar",
      image: "../../teams/Tanmay_Sarkar.webp",
    },
    {
      id: 3,
      name: "Supratim Das",
      image: "../../teams/Supratim_Das.webp",
    },
    {
      id: 4,
      name: "Aryan Singh",
      image: "../../teams/Aryan_Singh.webp",
    },
    {
      id: 5,
      name: "Arghya Biswas",
      image: "../../teams/Arghya_Biswas.webp",
    },
    {
      id: 6,
      name: "Debarjyo Ghosh",
      image: "../../teams/Debarjyo_Ghosh.webp",
    },
    {
      id: 7,
      name: "Shibam Nath",
      image: "../../teams/Shibam_Nath.webp",
    },
    {
      id: 8,
      name: "Udit Narayan Dutta",
      image: "../../teams/Udit_Narayan_Dutta.webp",
    },
    {
      id: 9,
      name: "Anubhab Banerjee",
      image: "../../teams/Anubhab_Banerjee.webp",
    },
    {
      id: 10,
      name: "Soumalya Dey",
      image: "../../teams/Soumalya_Dey.webp",
    },
    {
      id: 11,
      name: "Souvik Musib",
      image: "../../teams/Souvik_Musib.webp",
    },
    {
      id: 12,
      name: "Anindya Sundar Chattaraj",
      image: "../../teams/Anindya_Sundar_Chattaraj.webp",
    },
    {
      id: 13,
      name: "Ritesh Kangsha Banik",
      image: "../../teams/Ritesh_Kangsha_Banik.webp",
    },
    {
      id: 14,
      name: "Soumil Mitra",
      image: "../../teams/Soumil_Mitra.webp",
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
      name: "Souradip Bose",
      por: "Chairperson",
      image: "../../teams/Souradip_Bose.webp",
    },
    {
      id: 2,
      name: "Ujaan Roy",
      por: "Vice-Chairperson",
      image: "../../teams/Ujaan_Roy.webp",
    },
    {
      id: 3,
      name: "Ashmit Sinha",
      por: "Secretary",
      image: "../../teams/Ashmit_Sinha.webp",
    },
  ];
  const csChapter = [
    {
      id: 1,
      name: "Shashwata Roy",
      por: "Chairperson",
      image: "../../teams/Shashwata.webp",
    },
    {
      id: 2,
      name: "Prantik Das",
      por: "Vice-Chairperson",
      image: "../../teams/Prantik_Das.webp",
    },
    {
      id: 3,
      name: "Sanglap Das",
      por: "Secretary",
      image: "../../teams/Sanglap_Das.webp",
    },
  ];
  const wieSection = [
    {
      id: 1,
      name: "Chandrima Ghosh",
      por: "Chairperson",
      image: "../../teams/Chandrima_Ghosh.webp",
    },
    {
      id: 2,
      name: "Masuda Khatun",
      por: "Vice-Chairperson",
      image: "../../teams/Masuda_Khatun.webp",
    },
    {
      id: 3,
      name: "Pratyasha Pal",
      por: "Secretary",
      image: "../../teams/Pratyasha_Pal.webp",
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
      name: "Sourjya Mitra",
      por: "Vice-Chairperson",
      image: "../../teams/Sourjya_Mitra.webp",
    },
    {
      id: 3,
      name: "Ranindram Dutta",
      por: "Secretary",
      image: "../../teams/Ranindram_Dutta.webp",
    },
  ];
  const PES = [
    {
      id: 1,
      name: "Shaikh Shoaib Ahmed",
      por: "Chairperson",
      image: "../../teams/Shoaib.webp",
    },
    {
      id: 2,
      name: "Sujapa Bhattacharya",
      por: "Vice-Chairperson",
      image: "../../teams/Sujapa_Bhattacharya.webp",
    },
    {
      id: 3,
      name: "Shreyash Ray",
      por: "Secretary",
      image: "../../teams/Shreyash_Ray.webp",
    },
  ];
const sps=[
  {
    id: 1,
    name:"Koulinya Roy",
    por:"Chairperson",
    image: "../../teams/Koulinya.webp",
  },
  {
    id: 2,
    name:"Prakriti Ghosh",
    por:"Vice-Chairperson",
    image: "../../teams/Prakriti_Ghosh.webp"
  },
  {
    id:3,
    name:"Anirban Misra",
    por:"Secretary",
    image:"../../teams/Anirban_Misra.webp"
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
