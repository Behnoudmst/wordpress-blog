import Image from "next/image";
import Link from "next/link";



function Card (props) {



  
    return (
     <div className="card-container">
        <Image src={props.src} width ={340} height={220}/>
        <h2>{props.title}</h2>
        <p> {props.description}</p>
        
          <Link href={props.link}><div className="btn">READ MORE </div></Link>
        
      </div>
    );
  }
  
  export default Card;
