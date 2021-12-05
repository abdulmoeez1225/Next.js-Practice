import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: { postid: `${post.id}` },
  //   };
  // });

  return {
    paths: [
      {
        params: { postid: "1" },
      },
      {
        params: { postid: "2" },
      },
      {
        params: { postid: "3" },
      },
    ],
    // paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );

  const data = await response.json();

  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generating page page/${params.postid}`);

  return {
    props: {
      post: data,
    },
  };
};
