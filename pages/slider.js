import React from "react";
import Image from "next/image";

const slider = () => {
  return (
    <div>
      {["1", "2", "3", "4", "5", "6", "7"].map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={`/img/${item}.jpg`}
              blurDataURL
              width="1000"
              height={"500"}
              placeholder="blur"
            />
          </div>
        );
      })}
    </div>
  );
};

export default slider;
