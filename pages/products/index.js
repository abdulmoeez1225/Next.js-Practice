import React from "react";

import Link from "next/link";

const index = ({ products }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {products?.map((item, index) => {
        return (
          <div key={index}>
            <Link href={`products/${item.id}`} passHref>
              <h2>
                {item.id} {item.title} {item.price}
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
  console.log("Generating / Regenerating product list");

  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      // posts: data.slice(0, 100),
      products: data,
    },
    revalidate: 10,
  };
};
