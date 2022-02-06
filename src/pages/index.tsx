import { css } from "@emotion/react";
import Head from "next/head";
import { ContentContainer } from "../shared/styles";
// import { Header } from "../components/Header";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Head>
        <title>Rule of Thumb</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
    </>
  );
}

export default HomePage;
