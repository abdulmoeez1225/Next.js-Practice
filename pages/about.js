import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="This the example about of web development "
        />
      </Head>
      <button className="btn btn-primary">Button</button>

      <section>
        <div></div>
      </section>
    </div>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
