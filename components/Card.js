import Image from "next/image";
import Link from "next/link";



function Card(props) {

  return (
    <div className=" gap-4 text-white  bg-gradient-to-l from-purple-500  to-cyan-500  shadow-xl shadow-blue-900  rounded-xl p-1">
    <div className="h-full w-full bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
      <div>
      {/* <Image alt={props.title} className="mx-auto" src={props.src} layout="" width={100} height={50} /> */}
        <h2 className="pt-2">{props.title}</h2>
        <span className="mb-4 italic text-sm" >Published on {props.date}</span>
        <p>{props.description}</p>

      </div>
      <Link href={props.link} passHref><div className="cursor-pointer  py-2 rounded-xl bg-gray-600  text-white hover:bg-gray-800 w-36 text-center " >READ MORE</div></Link>
    </div>
  </div>
    // <div className="flex flex-col  rounded-xl shadow-xl backdrop-blur-sm">
      
    //   <div className="p-6 flex flex-col justify-between flex-1" >
    //     <div>
    //     <h2 className="text-2xl">{props.title}</h2>
    //     <span className="mb-4 italic text-sm" >Published on {props.date}</span>
    //     <p> {props.description}</p>
    //     </div>
    //     <Link href={props.link} passHref><div className=" w-full cursor-pointer  py-2 rounded-xl bg-gray-600 text-center text-white hover:bg-gray-800 " >READ MORE </div></Link>
    //   </div>
      
    // </div>
  );
}

export default Card;
