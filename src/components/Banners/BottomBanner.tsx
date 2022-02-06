import { Banner } from "src/shared/styled-components";
import { css, Theme } from "@emotion/react";

const bannerBottom = css`
  flex-direction: column;
  padding: 1rem 3rem;
  margin-top: 2rem;
  @media all and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }
`;

const bannerBottom__background = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  opacity: 0.2;
  pointer-events: none;

  @media all and (min-width: 768px) {
    top: -230%;
  }
`;

const bannerBottom__heading = (theme: Theme) => css`
  position: relative;
  margin: 0 0 1rem;
  color: ${theme.colors.darkGray};
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  @media all and (min-width: 768px) {
    margin-bottom: 0;
    font-size: 1.5rem;
  }
`;

const bannerBottom__left = css``;

const bannerBottom__right = css`
  width: 100%;
  @media all and (min-width: 768px) {
    width: auto;
  }
`;

const bannerBottom__cta = (theme: Theme) => css`
  position: relative;
  display: block;
  width: 100%;
  padding: 1rem 0;
  border: 2px solid ${theme.colors.darkerBackground};
  background: transparent;
  color: ${theme.colors.darkerGray};
  font-size: 1.5rem;
  @media all and (min-width: 768px) {
    width: 16rem;
  }
  @media all and (min-width: 1100px) {
    width: 20rem;
  }
`;

export function BottomBanner() {
  return (
    <Banner css={bannerBottom}>
      <img
        srcSet="/img/bg-people.png 750w, /img/bg-people.@2x.png 1440w"
        sizes="(min-width: 750px) 1440px, 100vw"
        css={bannerBottom__background}
        src="/img/bg-people.png"
        alt=""
        role="none"
      />
      <div css={bannerBottom__left}>
        <h2 css={bannerBottom__heading}>
          Is there anyone else you would want us to add?
        </h2>
      </div>
      <div css={bannerBottom__right}>
        <button css={bannerBottom__cta}>Submit a name</button>
      </div>
    </Banner>
  );
}
