import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <Head>
        <title>Rule of Thumb</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Header />
    </>
  );
}

export default HomePage;
