// noinspection HtmlUnknownTarget
import { css } from "@emotion/react";
import { IconButton, MaxContentContainer } from "../../shared/styled-components";
import { ReactNode } from "react";
import { FeaturedCard } from "./FeatureCard";

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


const hero__closingGauge = css`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: var(--color-light-background);
`;

interface Props {
  children?: ReactNode;
}

export function Header({ children }: Props) {
  return (
    <header css={hero}>
      <img
        css={hero__background}
        srcSet="/img/pope-francis.png 750w, /img/pope-francis.@2x.png 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        src="/img/pope-francis.png"
        alt="Pope Francis"
      />
      {/*<Image*/}
      {/*  css={hero__background}*/}
      {/*  layout="responsive"*/}
      {/*  src={popeFrancis}*/}
      {/*  sizes="(min-width: 750px) 1440px, 100vw"*/}
      {/*  alt="Pope Francis"*/}
      {/*/>*/}
      <MaxContentContainer>
        <FeaturedCard />
      </MaxContentContainer>
      {/*<div className="hero__closing-gauge">*/}
      {/*  <div className="closing-gauge__left">*/}
      {/*    <span className="closing-gauge__title">closing in</span>*/}
      {/*  </div>*/}
      {/*  <div className="closing-gauge__right">*/}
      {/*    <span className="closing-gauge__number">22</span>*/}
      {/*    <span className="closing-gauge__desc">days</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  );
}
