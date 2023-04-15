import Head from "next/head";
import Image from "next/image";
import { request } from "graphql-request";
import Card from "../components/Card.js";
import parse from "html-react-parser"
import { FaJs, FaReact, FaNodeJs, FaGem, FaCode, FaWordpress } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import profile from "../images/behnoud.png";
import Footer from "../components/Footer.js";
import Link from "next/link.js";

const icons = { color: "#e3f0ff", fontSize: "40" };
const query = `{
    posts {
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
    props: { postsList }, revalidate: 3600,
  };


}



export default function Home({ postsList }) {


  return (
    <>
      <Head>
        <title>Behnoud Mostafaie | IT Project Manager & Web Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="bg-slate-700 center p-10 py-20 lg:px-48 ">
        <div className="flex flex-col-reverse md:flex-row lg:items-center justify-between">
          <div className="   text-white ">
            <h1 className="py-2 lg:text-4xl text-2xl font-bold">Hi, This Is Behnoud</h1>
            <h2 className="text-2xl py-6">I am a developer.</h2>


            <span className="flex gap-x-4 pb-6 ">
              <FaJs style={icons} /> <FaNodeJs style={icons} />
              <FaReact style={icons} />
              <SiNextdotjs style={icons} />
            </span>
            <Link href="mailto:behnoud.mostafaie@gmail.com" passHref><div className="cursor-pointer  py-2 rounded-lg bg-gray-600  text-white  hover:outline hover:outline-1  w-36 text-center " >CONTACT ME</div></Link>

          </div>
          <Image className="grayscale object-contain" alt="Behnoud Mostafaie" src={profile} height={300} width={300} />
        </div>
      </section>
      <section className= "bg-slate-800 lg:px-48 px-8">
        <h2 className="text-4xl ml-5 py-12 text-white text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-8 lg:m-5 ">
          <div className=" gap-4 text-white border bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 border-red-500 shadow-xl shadow-red-900  rounded-xl p-1">
            <div className="h-full w-full bg-gray-800 rounded-lg p-6">
              <div>
                <FaGem className="mb-4" style={icons} />

                <h2 className="pt-0">Project Management</h2>
                <p>I am a project manager and I can take care of your digital products and manage development team.</p>
              </div>
            </div>
          </div>
          {/* ****************card 1 ************ */}
          <div className=" gap-4 text-white border bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 border-red-500 shadow-xl shadow-red-900  rounded-xl p-1">
            <div className="h-full w-full bg-gray-800 rounded-lg p-6">
              <div>
                <FaCode className="mb-4" style={icons} />

                <h2 className="pt-0">Developement</h2>
                <p>I can design and develope IT solutions based on your bussiness need. Contact me to discuss your project</p>
              </div>
            </div>
          </div>
          {/* ********* card 2 **************** */}


          {/* **************card 3 start ******************* */}
          <div className=" gap-4 text-white border bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 border-red-500 shadow-xl shadow-red-900  rounded-xl p-1">
            <div className="h-full w-full bg-gray-800 rounded-lg p-6">
              <div>
                <FaWordpress className="mb-4" style={icons} />

                <h2 className="pt-0">Wordpress</h2>
                <p>I can create a separate frontend for your wordpress website and speed it up by 10X!</p>
              </div>
            </div>
          </div>
          {/* *************** card end **************** */}
        </div>

      </section>

      {/* ************blog section start ***************** */}
      <section className=" bg-slate-900 lg:px-48 px-8">
        <h2 className=" text-center text-white text-4xl py-12">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-flow-row gap-8 lg:m-5	">
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
