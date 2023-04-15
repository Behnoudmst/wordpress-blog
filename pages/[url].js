import { getAllPostLinks } from "./api/postsFetch";
import { request } from "graphql-request";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Image from "next/image";
import Layout from "../components/Layout";
import Head from "next/head";
import Comments from "../components/Comments";
import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";



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

  const data = await request(process.env.WEBSITEURL, query).then((res) => {
    return res;
  }).catch((e) => (console.log(e)));

  const comments = await prisma.comment.findMany({
    where: { postName: data.postBy.title },
    select: {
      id: true,
      idea: true,
      profilePic: true,
      name: true,
    },
  });


  return { props: { data, comments  }, revalidate: 1800 }; //revalidateing the data from data base and updating if it has changes
}


// rendering page here

export default function SinglePost({ data, comments }) {

  const {data: session} = useSession();
const [comment , setComment] =  useState(comments);
async function deleteComment(id) {
  
  const res = await axios.post('./api/deleteComment' , {id:id})
  if (res.status === 200) {
    toast.success('comment deleted!');
  setComment(comment.filter( comment => comment.id !== id) );
}
}
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
        <meta name="description" content={data.postBy.content.slice(4,150) + '...'} />
      </Head>

      <Layout>
        <section className="md:w-2/3 p-6 bg-white mx-auto rounded">
          <div>
            <Image
              className="mx-auto"
              src={imgURL}
              alt={imgAlt}
              width={600}
              height={400}
            />

            <h1 className="text-3xl py-4">{data.postBy.title}</h1>
            <p className="text-lg pb-9 font-semibold ">
              Published on {postDate}
            </p>

            <article className="text-lg">{parse(data.postBy.content)} </article>
          </div>

          {/* ************ comments section ******* */}
          <div className="mx-auto my-14 " id="commentBox">
            <h2>Ideas:</h2>
            {comment[0] ? "" : "😃 Be the first to write your Idea ..."}
            {comment.map((x) => {
              return (
                <div
                  key={x.id}
                  className="ml-6 m-4 flex flex-auto align-baseline items-center justify-between"
                >
                  <div className="flex flex-auto align-baseline items-center">
                  <Image
                    className="rounded-full  mr-3 "
                    src={x.profilePic}
                    width={60}
                    height={60}
                    alt={x.altText}
                  />
                  <div className="ml-3">
                    <h3> {x.name}</h3>
                    <p> {x.idea}</p>
                  </div>
                  </div>
                  {  session != null && session.user.name === x.name  ? <button onClick={() => deleteComment(x.id)} className="btn">Delete</button> : null}
                </div>
              );
            })}
          </div>
        </section>
        {/* send postname to comments component to identify the comment is for this post */}
        <Comments postName={data.postBy.title} />
      </Layout>
    </>
  );
}
