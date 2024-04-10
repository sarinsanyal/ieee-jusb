import RecruitCard from "../RecruitCard";

export default function Recruit() {
  return (
    <div className="font-Josefin py-8">
      <h1 className="text-4xl text-sky-950 text-center font-extrabold">
        JOIN US
      </h1>
      <hr className="w-28 h-1 mx-auto mt-3 bg-sky-950 border-0"></hr>
      <div className="w-full h-full flex flex-wrap justify-center items-center gap-24 px-2 md:px-16 py-16">
        <RecruitCard
          title="Technical Team"
          content="The tech team drives all the technical matters of IEEE JUSB, maneuvering their path through lines of codes, designing websites and much more.
          "
          link="/tech-recruit"
        />
        <RecruitCard
          title="Design Team"
          content="The design team at IEEE JUSB gets creative with Photoshop, Illustrator and more, crafting visually stunning content that captivates and reflects our innovative spirit."
          link="/design-recruit"
        />
        <RecruitCard
          title="Content Team"
          content="The Content Team creates compelling social media posts, engaging emails, and persuasive applications for participants and speakers. They compose proffessional emails to secure venues and curate event website content."
          link="/content-recruit"
        />
        <RecruitCard
          title="PR Team"
          content="The PR(Public Relation) team of  IEEE JU SB is responsible for communicating strategically, working to build and maintain positive relationships with the public through witty social media posts and relevant information bytes."
          link="/pr-recruit"
        />
        <RecruitCard
          title="Logistics Team"
          content="The Logistics Team are meticulous planners and coordinators essential for IEEE JUSB event success. They architect seamless execution, ensuring thorough preparations and attention to every detail behind the scenes."
          link="/logistic-recruit"
        />
        <RecruitCard
          title="Sponsorship Team"
          content="Meet the powerhouse behind IEEE JUSB's sponsorships, responsible for forging strategic partnerships, securing funding, and bringing electrifying events to life through creative collaborations."
          link="/sponsor-recruit"
        />
      </div>
    </div>
  );
}
