import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { MaxContentContainer } from "src/shared/styled-components";
import { BottomBanner } from "src/components/BottomBanner";
import { TopBanner } from "../components/TopBanner";

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
      <MaxContentContainer>
        <TopBanner />
        <main>

        </main>
      <BottomBanner />
      </MaxContentContainer>
    </>
  );
}

export default HomePage;
