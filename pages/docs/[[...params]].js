import { useRouter } from "next/router";
import React from "react";

const ProductDetail = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params);
  return (
    <div>
      <h1>Params</h1>
      {params.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </div>
  );
};

export default ProductDetail;
