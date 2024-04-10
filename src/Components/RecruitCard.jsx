import { Link } from "react-router-dom";

const RecruitCard = ({ title, content, link }) => {
  return (
    <div className="w-[80%] md:w-[40%] h-[28rem] flex flex-col justify-between text-white bg-sky-800 p-8 rounded-lg shadow-md shadow-black">
      <h1 className=" text-4xl font-bold">{title}</h1>
      <p>{content}</p>
      <Link
        to={link}
        className="bg-white hover:bg-sky-200 duration-500 text-sky-800 w-fit p-2 rounded-lg"
      >
        Apply now
      </Link>
    </div>
  );
};

export default RecruitCard;
