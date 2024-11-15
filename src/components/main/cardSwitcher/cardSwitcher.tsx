import { AiFillStar } from "react-icons/ai";
import { ImPlay2 } from "react-icons/im";
import { BsFillCalendarDateFill, BsFillPeopleFill } from "react-icons/bs";

interface IMovies {
  name: string;
  image: string;
  average: string;
  popularity: string;
  date: string;
  resume: string;
}

export function CardSwitcher({
  name,
  image,
  average,
  popularity,
  date,
  resume,
}: IMovies) {
  const image_path = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="flex gap-7 rounded-xl h-[32rem] bg-gray-800 p-2 items-center justify-center ">
      <img
        src={`${image_path}${image}`}
        alt="image"
        className="rounded-md h-[28rem]"
      />
      <div className=" flex flex-col mt-10 ml-10 text-white w-[40rem] ">
        <h1 className="text-5xl mb-6">{name} </h1>
        <div className="flex gap-3 mb-8 items-center">
          <span>Avarege: {average}</span>
          <AiFillStar />|<span>Release: {date}</span>
          <BsFillCalendarDateFill />|<span>Public: {popularity}</span>
          <BsFillPeopleFill />
        </div>
        <p className="">{resume}</p>

        <div className="flex gap-5 items-center mt-20">
          <ImPlay2 className="w-12 h-12" />
          <span className="text-2xl"> Watch now </span>
        </div>
      </div>
    </div>
  );
}
