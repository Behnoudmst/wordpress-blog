import { getAllPostLinks } from "./api/postsFetch";
import { request } from "graphql-request";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout"
import Head from "next/head";

export async function getStaticPaths() {
  const paths = await getAllPostLinks();

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const query =  `{
    postBy(uri: "${params.url}") {
      id
      date
      title
      content
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }`
  

  const data = await request("https://behnoud.net/ben", query).then((res) => {
    return res;
  });

  return { props: { data } };
}

export default function SinglePost({ data }) {

  const newData = data. postBy
  const imgURL = newData.featuredImage.node.mediaItemUrl;
  const  imgAlt = newData.featuredImage.node.altText;
const postDate = newData.date.slice(0,10);



  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
<>
<Head> 
    <title>Behnoud Mostafaie | {data.postBy.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta author="behnoud mostafaie" />
</Head>

    <Layout>
    <section >
      <div className="content">
        <Image src={imgURL} alt = {imgAlt} width={600} height={400}/>

      <h1>{data.postBy.title}</h1>
      <p>Published on {postDate}</p>

      {parse(data.postBy.content)} 
      </div>
      <Link href="/"><button className="under-content-button" >Return to Home</button></Link>
    </section>
    </Layout>






    </>
  );
  // Render post...
}
