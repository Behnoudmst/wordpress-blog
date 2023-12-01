import { FaLinkedin, FaInstagram, FaCodepen } from "react-icons/fa";
import Link from "next/link";
const icons = { color: "#808b99", fontSize: "30" };
const Yer = new Date().getFullYear();

export default function Footer() {
  return (
    <section className="bg-black text-white md:p-8 p-8 lg:px-48 ">
      <footer className="md:flex md:gap-8 flex-1 ">
        <div className="flex-1">
          <h2 className="text-2xl ">Chi sono</h2>
          <p>
          Siete alla ricerca di un web designer che possa aiutarvi a creare una straordinaria presenza online per la vostra azienda? Sono un web designer e sviluppatore professionista con 7 anni di esperienza nella creazione di siti web personalizzati che non solo hanno un aspetto fantastico, ma producono anche risultati per aziende di tutte le dimensioni.
          </p>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl ">Contattatemi</h2>
          <p>
          Non aspettate a portare la vostra presenza online al livello successivo. Contattatemi oggi stesso per fissare una consulenza e saperne di più sui miei servizi di web design personalizzato. Lasciate che vi aiuti a creare un sito web che abbia un aspetto fantastico, funzioni ancora meglio e produca risultati per la vostra attività.
          </p>
          <Link href="mailto:behnoud.mostafaie@gmail.com" passHref>
              <div className="cursor-pointer  py-1 mb-4 rounded-lg bg-gray-600  text-white  hover:outline hover:outline-1  w-44 text-center ">
              Inviami un messaggio
              </div>
            </Link>
        </div>
      </footer>
      <div >
        <hr></hr>
        <div className="text-center py-2">
          <p>© {Yer} All rights reserved by Behnoud Mostafaie.</p>
          <div className="flex mx-auto w-max py-4 gap-3">
            <a aria-label="LinkedIn icon link" href="https://www.linkedin.com/in/behnoudmst/"><FaLinkedin  style={icons}/></a>
             <a aria-label="Instagram icon link" href="https://www.instagram.com/behnoud.mst/"><FaInstagram  style={icons} /></a>
             <a aria-label="CodePen icon link" href="https://codepen.io/Benmst/"><FaCodepen  style={icons} /></a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
