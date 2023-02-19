import Image from "next/image";
import Link from "next/link";



function Card (props) {



  
    return (
     <div className="flex flex-col justify-between bg-gray-50 p-8 rounded shadow">
        <Image alt={props.title} className="bg-cover" src={props.src} layout="responsive" width={300} height={200}/>
        <h2 className="text-2xl py-4">{props.title}</h2>
        <span>Published on {props.date}</span>
        <p> {props.description}</p>
        
          <Link href={props.link} passHref><div className=" cursor-pointer my-4 py-2 rounded bg-gray-600 text-center text-white hover:bg-gray-800 w-36" >READ MORE </div></Link>
        
      </div>
    );
  }
  
  export default Card;
