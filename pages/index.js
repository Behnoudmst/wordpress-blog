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
import Footer from "../components/Footer.js";
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
        <title>Behnoud Mostafaie | IT Project Manager & Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="I'm Behnoud Mostafaie, IT manager and web developer with over 7 years of experience. If you need a website, web app or mobile app, I can help you do it the right way. let's Connect!"
        />
      </Head>

      <section className="bg-black center p-10 py-28 lg:px-48 ">
        <div className="flex flex-col-reverse md:flex-row lg:items-center justify-between">
          <div className="   text-white ">
            <h1 className="py-2 lg:text-4xl text-2xl font-bold">
              Hi, I am Behnoud
            </h1>
            <h2 className=" text-white text-2xl py-6">Web Designer and Developer.</h2>

            <span className="flex gap-x-4 pb-6 ">
              <FaJs style={icons} /> <FaNodeJs style={icons} />
              <FaReact style={icons} />
              <SiNextdotjs style={icons} />
            </span>
            <Link href="mailto:behnoud.mostafaie@gmail.com" passHref>
              <div className="cursor-pointer  py-2 rounded-lg bg-gray-600  text-white  hover:outline hover:outline-1  w-36 text-center ">
                CONTACT ME
              </div>
            </Link>
          </div>
          <Image
            priority="true"
            className="grayscale object-contain"
            alt="Behnoud Mostafaie"
            src={profile}
            height={300}
            width={300}
          />
        </div>
      </section>
      {/* ============== services section start ==================== */}
      <section className="bg-slate-900 lg:px-40 px-8 pb-8">
        <h2 className="text-4xl ml-5 py-12 text-white text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-8 lg:m-5 ">
          {/* ================ card 1 ============== */}
          <div className=" text-white bg-black shadow-xl shadow-purple-500/70 rounded-xl p-6">
            <FaGem className="mb-4" style={icons} />

            <h2 className="pt-0">Project Management</h2>
            <p>
              I am a project manager and I can take care of your digital
              products and manage development team.
            </p>
          </div>

          {/* ****************card 1 end************ */}
          <div className=" text-white  bg-black shadow-xl shadow-purple-500/70 rounded-xl p-6">
            <FaCode className="mb-4" style={icons} />

            <h2 className="pt-0">Development</h2>
            <p>
              I can design and develop IT solutions based on your business
              need. Contact me to discuss your project
            </p>
          </div>
          {/* ********* card 2 end**************** */}

          {/* **************card 3 start ******************* */}
          <div className=" text-white  bg-black shadow-xl shadow-purple-500/70 border-slate-50/50 rounded-xl p-6">
            <FaWordpress className="mb-4" style={icons} />

            <h2 className="pt-0">WordPress</h2>
            <p>
              I can create a separate frontend for your WordPress website and
              speed it up by at least 5X!
            </p>
          </div>

          {/* *************** card end **************** */}
        </div>
      </section>

      {/* ************blog section start ***************** */}
      <section className=" bg-slate-900 md:px-8 lg:px-40 pb-8 ">
        <h2 className=" text-center text-white text-4xl py-12">Blog</h2>

        <div className="grid pb-8 snap-x snap-mandatory md:snap-normal overflow-x-auto md:overflow-hidden md:grid-cols-2 lg:grid-cols-3 grid-flow-col md:grid-flow-row gap-4 md:gap-6 lg:m-5	">
          {postsList.map((x, index) => {
            const excerpt = x.node.excerpt;
            const datePublished = x.node.date.slice(0, 10);
            const imgurl = x.node.featuredImage.node.mediaItemUrl;
            return (
              <Card
                key={index}
                title={x.node.title}
                date={datePublished}
                description={parse(excerpt)}
                src={imgurl}
                link={x.node.uri}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
