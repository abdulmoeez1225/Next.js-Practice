import React from "react";

const NewsArticleList = ({ articles }) => {
  return (
    <div>
      <h1>articles</h1>

      {articles.map((article, index) => {
        return (
          <>
            <div key={index}>
              <h2>
                {article.title} {article.content}
              </h2>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default NewsArticleList;

export const getServerSideProps = async () => {
  const response = await fetch(`http://localhost:4000/news`);

  const data = await response.json();
  console.log("Pre-rendering NewsArticleList");

  return {
    props: {
      articles: data,
    },
  };
};
