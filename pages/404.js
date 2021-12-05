import Lottie from "lottie-web";
import React, { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById("animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets6.lottiefiles.com/packages/lf20_afwjhfb2.json",
    });
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        <div id="animation" />
      </div>
    </div>
  );
};

export default PageNotFound;
