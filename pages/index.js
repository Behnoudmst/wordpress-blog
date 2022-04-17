import Head from "next/head";
import Image from "next/image";
import { request } from "graphql-request";
import Card from "../components/Card.js";
import parse from "html-react-parser"
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import profile from "../images/behnoud.png";
import Footer from "../components/Footer.js"
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
  const data = await request("https://behnoud.net/ben", query).then((res) => {
    return res;
  });
   const postsList = await data.posts.edges;

  return {
    props: { postsList },revalidate: 10000,
  };

 
}



export default function Home({ postsList }) {
 
  
  return (
    <>
    <Head> 
    <title>Behnoud Mostafaie | Web developer</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta author="behnoud mostafaie" />
       </Head>
     
      <section className="top-section">
        <div className="content content-top">
          <div className="item">
            <h1>Hi, This Is Behnoud</h1>
            <h2>I am a developer.</h2>

            <span>
              <FaJs style={icons} /> <FaNodeJs style={icons} />
              <FaReact style={icons} />
              <SiNextdotjs style={icons} />
            </span>
          </div>
          <Image className="item" src={profile} height={300} width={300} />
        </div>
        <section>

        </section>



      </section>
      {/* ************blog section start ***************** */}
      <section>
        <h2 className="sec-headings">Blog</h2>
       
        <div className="posts-grid">
          {postsList.map((x,index) => {
            const excerpt = x.node.excerpt;
            const datePublished = x.node.date.slice(0,10);
            const imgurl = x.node.featuredImage.node.mediaItemUrl;
            return (
            
                <Card
                key={index} 
                  title={x.node.title}
                  date={datePublished}
                  description={parse(excerpt)}
                  src={imgurl}
                  link = {x.node.uri}
                />
              
            );
          })}
        </div>
      </section>
      <Footer />
      </>
  );
}
