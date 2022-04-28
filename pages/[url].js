import { getAllPostLinks } from "./postsFetch";
import { request } from "graphql-request";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Image from "next/image";
import Layout from "../components/Layout";
import Head from "next/head";
import Comments from "../components/Comments";

import { PrismaClient } from "@prisma/client";

export async function getStaticPaths() {
  const paths = await getAllPostLinks();

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const query = `{
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
  }`;

  const comments = await prisma.comment.findMany({
    where: { postName: params.title },
    select: {
      idea: true,
      name: true,
    },
  });

  const data = await request("https://behnoud.net/ben", query).then((res) => {
    return res;
  });

  return { props: { data, comments } };
}

export default function SinglePost({ data, comments }) {
  // cleaning the data response
  const newData = data.postBy;
  // some de structuring
  const imgURL = newData.featuredImage.node.mediaItemUrl;
  const imgAlt = newData.featuredImage.node.altText;
  const postDate = newData.date.slice(0, 10);

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
        <section className=" md:w-2/3 p-12 bg-white mx-auto rounded">
          <div>
            <Image className="mx-auto" src={imgURL} alt={imgAlt} width={600} height={400} />

            <h1 className="text-3xl py-4">{data.postBy.title}</h1>
            <p className="text-lg pb-9 font-semibold ">Published on {postDate}</p>

            <article className="text-lg">{parse(data.postBy.content)} </article>
          </div>
        <div className="mx-auto my-14 md:w-2/3">
          <h2>Ideas:</h2>
          {comments.map((x) => {
            key: {x.id}
            return <div  className="ml-6 m-4" >
              
                <h3>🙎‍♂️ {x.name}</h3>
                <p>💭 {x.idea}</p>
              </div>
            
          })}
         </div>
        </section>

        <Comments postName={data.postBy.title} />
      </Layout>
    </>
  );
}
