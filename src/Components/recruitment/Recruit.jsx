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
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, cum
          numquam culpa repudiandae sunt veritatis mollitia eos assumenda
          reiciendis. Eaque."
          link="/tech-recruit"
        />
        <RecruitCard
          title="Design Team"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, cum
          numquam culpa repudiandae sunt veritatis mollitia eos assumenda
          reiciendis. Eaque."
          link="/design-recruit"
        />
        <RecruitCard
          title="Content Team"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, cum
          numquam culpa repudiandae sunt veritatis mollitia eos assumenda
          reiciendis. Eaque."
          link="/content-recruit"
        />
        <RecruitCard
          title="PR Team"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, cum
          numquam culpa repudiandae sunt veritatis mollitia eos assumenda
          reiciendis. Eaque."
          link="/pr-recruit"
        />
        <RecruitCard
          title="Logistics Team"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, cum
          numquam culpa repudiandae sunt veritatis mollitia eos assumenda
          reiciendis. Eaque."
          link="/logistic-recruit"
        />
        <RecruitCard
          title="Sponsorship Team"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, cum
          numquam culpa repudiandae sunt veritatis mollitia eos assumenda
          reiciendis. Eaque."
          link="/sponsor-recruit"
        />
      </div>
    </div>
  );
}
