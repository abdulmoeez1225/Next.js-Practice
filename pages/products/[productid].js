// import { useRouter } from "next/router";
import React from "react";

const Post = ({ product }) => {
  // const router = useRouter();

  // if (router.isFallback) {
  // return <div>Loading</div>;
  // }

  return (
    <div>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.descritpion}</p>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:4000/products`);

  const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: { postid: `${post.id}` },
  //   };
  // });

  return {
    paths: [
      {
        params: { productid: "1" },
      },
      {
        params: { productid: "2" },
      },
      {
        params: { productid: "3" },
      },
    ],
    // paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(`Generating page page/${params.productid}`);
  const response = await fetch(
    `http://localhost:4000/products/${params.productid}`
  );

  const data = await response.json();

  if (!data.id) {
    return { notFound: true };
  }

  console.log(`Generating page page/${params.productid}`);

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};
