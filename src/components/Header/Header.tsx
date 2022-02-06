import { css } from "@emotion/react";
import { MaxContentContainer } from "src/shared/styled-components";
import { FeaturedCard } from "./FeatureCard";
import { ClosingGauge } from "./ClosingGauge";

const hero = css`
  position: relative;
  overflow: hidden;
  height: 80vw;
  min-height: 35rem;
  max-height: 38rem;
  margin-bottom: 2rem;
  @media all and (min-width: 768px) {
    max-height: 38rem;
  }
  @media all and (min-width: 1100px) {
    min-height: 700px;
  }
`;

const hero__background = css`
  position: absolute;
  left: -35vw;
  width: 160vw;
  height: 100%;
  object-fit: cover;
  @media all and (min-width: 768px) {
    top: -6.5rem;
    left: 0;
    width: 110vw;
    height: auto;
  }
  @media all and (min-width: 1100px) {
    top: -2.5rem;
    left: 0;
    width: 100vw;
    height: auto;
  }
`;

export function Header() {
  return (
    <header css={hero}>
      <img
        css={hero__background}
        srcSet="/img/pope-francis.png 750w, /img/pope-francis.@2x.png 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        src="/img/pope-francis.png"
        alt="Pope Francis"
      />
      <MaxContentContainer>
        <FeaturedCard />
      </MaxContentContainer>
      <ClosingGauge />
    </header>
  );
}
