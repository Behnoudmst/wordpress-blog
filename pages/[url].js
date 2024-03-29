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
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { adsBox } from "../constants/constants";


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
  const postUrl = `https://behnoud.net/${params.url}`;
  const data = await request(process.env.WEBSITEURL, query)
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
    
  const comments = await prisma.comment.findMany({
    where: { postName: data.postBy.title },
    select: {
      id: true,
      idea: true,
      profilePic: true,
      name: true,
    },
  });

     
  return { props: { data, comments, postUrl }, revalidate: 18000 }; //revalidating the data from data base and updating if it has changes
}

// rendering page here

export default function SinglePost({ data, comments, postUrl, }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState(comments ? comments : "");
  async function deleteComment(id) {
    const res = await axios.post(`https://${process.env.VERCEL_URL}/api/deleteComment`, { id: id });
    if (res.status === 200) {
      toast.success("comment deleted!");
      setComment(comment.filter((comment) => comment.id !== id));
    }
  }
  // cleaning the data response
  const newData = data.postBy;
  //some de-structuring
  const imgURL = newData.featuredImage.node.mediaItemUrl;
  const imgAlt = newData.featuredImage.node.altText;
  const postContent = parse(newData.content);
  const router = useRouter();
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{data.postBy.title} | Behnoud Mostafaie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={data.postBy.content.slice(4, 150) + "..."}
        />
        <meta name="image" property="og:image" content={imgURL} />
        <meta name="author" content="Behnoud Mostafaie" />
      </Head>

      <Layout>
        <section className="md:w-2/3 p-6 pt-24 bg-white mx-auto rounded">
          <div>
            <Image
              priority="true"
              className="mx-auto"
              src={imgURL}
              alt={imgAlt}
              width={600}
              height={400}
            />

            <h1 className="text-3xl py-4">{data.postBy.title}</h1>
              <div>{adsBox}</div>
            <div className="text-lg">{postContent}</div>
          </div>

          {/* ****************** share buttons ******************** */}
          <div className="lg:flex lg:justify-between p-4 md:p-6 bg-slate-100 rounded-md">
            <h3 className=" text-center md:text-left">
              Please share this article:
            </h3>
            <div className="flex justify-between">
              <LinkedinShareButton title={data.postBy.title} url={postUrl}>
                <LinkedinIcon round className="md:mx-2" size={42} />
              </LinkedinShareButton>
              <TwitterShareButton title={data.postBy.title} url={postUrl}>
                <TwitterIcon round className="md:mx-2" size={42} />
              </TwitterShareButton>
              <TelegramShareButton title={data.postBy.title} url={postUrl}>
                <TelegramIcon className="md:mx-2" round size={42} />
              </TelegramShareButton>
              <WhatsappShareButton title={data.postBy.title} url={postUrl}>
                <WhatsappIcon round className="md:mx-2" size={42} />
              </WhatsappShareButton>
              <FacebookShareButton quote={data.postBy.title} url={postUrl}>
                <FacebookIcon className="md:mx-2" size={42} round />
              </FacebookShareButton>
              <EmailShareButton
                body={data.postBy.title}
                separator=" | "
                subject="Hey, I think you will like this article!"
                url={postUrl}
              >
                <EmailIcon className="md:mx-2" size={42} round />
              </EmailShareButton>
            </div>
          </div>

          {/* ************ comments section ******* */}
          <div className="mx-auto my-14 " id="commentBox">
            <h2>Post a comment:</h2>
            <hr />
            {comment[0] ? "" : "😃 Be the first to write your Idea ..."}
            {comment.map((x) => {
              return (
                <div
                  key={x.id}
                  className="my-3 p-3 rounded-lg md:flex flex-auto  items-center justify-between border border-spacing-1 bg-slate-50 border-slate-200"
                >
                  <div className="flex w-full items-center">
                    <div className="self-start">
                      <Image
                        className="rounded-full "
                        src={x.profilePic}
                        width={60}
                        height={60}
                        alt={x.altText}
                      />
                    </div>
                    <div className="ml-3 flex-1 ">
                      <h4 className="font-bold"> {x.name}</h4>
                      <p> {x.idea}</p>
                    </div>
                  </div>
                  {session != null && session.user.name === x.name ? (
                    <button
                      onClick={() => deleteComment(x.id)}
                      className="btn self-start w-20"
                    >
                      Delete
                    </button>
                  ) : null}
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
