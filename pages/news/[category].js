import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

const NewsArticleList = ({ articles, category }) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.category);
  }, []);

  return (
    <div>
      <h1>Category {category}</h1>

      {articles.map((article, index) => {
        return (
          <div key={index}>
            <div>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export const getServerSideProps = async (context) => {
  const { params, res, req, query } = context;

  console.log("query", query.category);
  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ["name=Abdul Moeez"]);

  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );

  const data = await response.json();

  console.log("Pre-rendering News Articles for Category: ", category);

  return {
    props: {
      articles: data,
      category,
    },
  };
};
