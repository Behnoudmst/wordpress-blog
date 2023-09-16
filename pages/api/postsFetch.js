import { request } from "graphql-request";

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

export async function getAllPostLinks() {
  const data = await request("https://wp.behnoud.net/ben", query).then((res) => {
    return res;
  });
  const postsList = await data.posts.edges;

  const postLinks = postsList.map((x) => {
    return {
      params: {
        url: x.node.uri,
      },
    };
  });

  return postLinks;
}

// export default async function getPostData(url) {
//   const data = await request("https://wp.behnoud.net/ben", query).then((res) => {
//     return res;
//   });
//   const postsdata = await data.posts.edges;

//   postsdata.filter((x) => {
//     return x.node.uri == url;
//   });
//   // Combine the data with the url
//   return {
//     url,
//     post,
//   };
// }
