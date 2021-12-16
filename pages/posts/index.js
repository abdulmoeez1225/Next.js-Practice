import React from "react";

import Link from "next/link";
import NewsArticleList from "../news";

const index = ({ posts }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      <NewsArticleList />
      {posts?.map((item, index) => {
        return (
          <div key={index}>
            <Link href={`posts/${item.id}`} passHref>
              <h2>
                {item.id} {item.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      // posts: data.slice(0, 100),
      posts: data,
    },
  };
};
