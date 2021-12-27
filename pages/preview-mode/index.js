import React from "react";

const PreviewMode = ({ data }) => {
  return <div>{data}</div>;
};

export default PreviewMode;

export async function getStaticProps(context) {
  console.log("Pre-rendering PreviewMode"); // eslint-disable-line no-console
  return {
    props: {
      data: context.preview
        ? "List of Draft articles"
        : "List of Published Articles",
    },
  };
}
