import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

function Card(props) {
  return (
    <div className="snap-normal snap-center gap-4 text-white w-72 md:w-auto bg-gradient-to-l from-purple-500  to-cyan-500  shadow-xl shadow-blue-900  rounded-xl p-1">
      <div className="h-full w-full bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
        <div>
          {/* <Image alt={props.title} className="mx-auto" src={props.src} layout="" width={100} height={50} /> */}
          <h2>{props.title}</h2>
          <div className="mb-4 flex gap-1 items-center italic text-xs">
            <FaCalendarAlt /> <span>{props.date}</span>
          </div>
          {props.description}
        </div>
        <Link href={props.link} passHref>
          <div className="cursor-pointer text-gray-200 hover:text-white py-2 rounded-xl bg-gray-600  text-white hover:bg-black w-full text-center ">
            READ MORE
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
