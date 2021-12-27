import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
