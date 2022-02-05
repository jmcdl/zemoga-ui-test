import { css } from "@emotion/react";
import Head from "next/head";
import { ContentContainer } from "../styles/styles";
// import { Navbar } from "../components/Navbar";
// import { Header } from "../components/Header";

function HomePage() {
  return (
    <>
      <Head>
        <title>Rule of Thumb</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ContentContainer>
        <h1
          css={css`
            font-size: 20px;
            font-weight: 700;
          `}
        >
          hello
        </h1>
      </ContentContainer>
    </>
  );
}

export default HomePage;
