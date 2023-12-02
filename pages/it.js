import Head from "next/head";
import Image from "next/image";
import { request } from "graphql-request";
import Card from "../components/Card.js";
import parse from "html-react-parser";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGem,
  FaCode,
  FaWordpress,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import profile from "../images/behnoud.png";
import Footer from "../components/FooterIt.js";
import Link from "next/link.js";

const icons = { color: "#e3f0ff", fontSize: "40" };
const query = `{
    posts (first:12) {
      edges {
        node {
          date
          excerpt
          title
          uri
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
     
    
    }
  }`;

export async function getStaticProps() {
  const data = await request(process.env.WEBSITEURL, query).then((res) => {
    return res;
  });
  const postsList = await data.posts.edges;

  return {
    props: { postsList },
    revalidate: 1600,
  };
}

export default function Home({ postsList }) {
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content="it" />
        <title>
          Behnoud Mostafaie | Sviluppatore web a Milano | full stack MERN{" "}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hai bisogno di un esperto sviluppatore web per realizzare il tuo progetto online? Sono qui per aiutarti! Con competenze avanzate e una vasta esperienza, offro servizi di sviluppo web personalizzati. Contattami oggi per trasformare la tua visione digitale in realtà."
        />
      </Head>

      <section className="bg-black center p-10 py-28 lg:px-48 ">
        <div className="flex flex-col-reverse md:flex-row lg:items-center justify-between">
          <div className="   text-white ">
            <h1 className="py-2 lg:text-4xl text-2xl font-bold">
              Ciao, Sono Behnoud!
            </h1>
            <h2 className=" text-white text-2xl py-6">
              Sviluppatore full-stack.
            </h2>

            <span className="flex gap-x-4 pb-6 ">
              <FaJs style={icons} /> <FaNodeJs style={icons} />
              <FaReact style={icons} />
              <SiNextdotjs style={icons} />
            </span>
            <Link href="mailto:behnoud.mostafaie@gmail.com" passHref>
              <div className="cursor-pointer  py-2 rounded-lg bg-gray-600  text-white  hover:outline hover:outline-1  w-36 text-center ">
                contattatemi
              </div>
            </Link>
          </div>
          <Image
            priority="true"
            loading="eager"
            className="grayscale object-contain"
            alt="Behnoud Mostafaie"
            src={profile}
            height={300}
            width={300}
          />
        </div>
      </section>
      {/* ============== services section start ==================== */}
      <section className="bg-slate-900 lg:px-40 px-8 pb-8 text-slate-50 text-center">
        <h1>Sviluppatore Web Specializzato per Progetti Personalizzati</h1>
        <p>
          Se stai cercando un affidabile sviluppatore web per portare avanti la
          tua presenza online, sei nel posto giusto. Come sviluppatore web
          esperto con anni di esperienza nel settore, offro soluzioni su misura
          per soddisfare le tue esigenze digitali.
        </p>
      </section>
      <section className="bg-slate-900 lg:px-40 px-8 pb-8">
        <h2 className="text-4xl ml-5 py-12 text-white text-center">
          I Miei Servizi:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-8 lg:m-5 ">
          {/* ================ card 1 ============== */}
          <div className=" text-white bg-black shadow-xl shadow-fuchsia-500/70 rounded-xl p-6">
            <FaGem className="mb-4" style={icons} />

            <h2 className="pt-0">Gestione dei progetti</h2>
            <p>
              Sono un project manager e posso occuparmi dei vostri prodotti
              digitali e gestire il team di sviluppo. prodotti digitali e
              gestire il team di sviluppo.
            </p>
          </div>

          {/* ****************card 1 end************ */}
          <div className=" text-white  bg-black shadow-xl shadow-fuchsia-500/70 rounded-xl p-6">
            <FaCode className="mb-4" style={icons} />

            <h2 className="pt-0">Sviluppo full-stack</h2>
            <p>
              Posso progettare e sviluppare soluzioni informatiche in base alle
              vostre esigenze aziendali. Contattatemi per discutere il vostro
              progetto
            </p>
          </div>
          {/* ********* card 2 end**************** */}

          {/* **************card 3 start ******************* */}
          <div className=" text-white  bg-black shadow-xl shadow-fuchsia-500/70 border-slate-50/50 rounded-xl p-6">
            <FaWordpress className="mb-4" style={icons} />

            <h2 className="pt-0">WordPress</h2>
            <p>
              Posso ottimizzare e mantenere il vostro sito web wordpress o
              creare un frontend separato per esso e velocizzarlo di almeno 5
              volte!
            </p>
          </div>

          {/* *************** card end **************** */}
        </div>
      </section>
      <section className="bg-slate-800 lg:px-40 px-8 pb-12 py-16 text-slate-50">
        <h2>Perché Scegliere Me:</h2>
        <ul>
          <li>
            <strong>Esperienza Comprovata:</strong> Con oltre 7 anni di
            esperienza, ho lavorato su una vasta gamma di progetti web di
            successo.
          </li>
          <li>
            <strong>Approccio Collaborativo:</strong> Lavoro a stretto contatto
            con i clienti per comprendere appieno le loro esigenze e offrire
            soluzioni personalizzate.
          </li>
          <li>
            <strong>Tecnologie All&apos;avanguardia: </strong> Utilizzo le
            ultime tecnologie e le migliori pratiche per garantire risultati di
            alta qualità.
          </li>
        </ul>
      </section>
      <section className=" lg:px-[25%] px-8 py-16 text-center text-white bg-slate-900">
        <h3 className="text-xl lg:text-4xl leading-6">
          Non importa se hai un&apos;idea chiara del tuo progetto o se stai cercando
          consulenza. Sono qui per discutere delle tue esigenze e trovare la
          soluzione perfetta per te. <Link href="mailto:behnoud.mostafaie@gmail.com" className="underline">Contattami oggi</Link> per iniziare il tuo viaggio
          verso il successo online con un esperto sviluppatore web al tuo
          fianco.
        </h3>
      </section>
      <Footer />
    </>
  );
}
