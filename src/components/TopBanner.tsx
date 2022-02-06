import { css } from "@emotion/react";
import { Banner, IconButton } from "src/shared/styled-components";

const bannerTop__text = css`
  margin: 0;
  color: var(--color-dark-gray);
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -0.05rem;
  @media all and (min-width: 1100px) {
    font-size: 1rem;
  }
`;

const bannerTop__left = css`
  flex-basis: 40%;
  padding-right: 1rem;
  @media all and (min-width: 500px) {
    flex-basis: 30%;
  }
  @media all and (min-width: 768px) {
    flex-basis: 20%;
  }
`;

const bannerTop__hairline = css`
  color: var(--color-dark-gray);
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: -0.07rem;
  @media all and (min-width: 1100px) {
    font-size: 1rem;
  }
`;

const bannerTop__title = css`
  display: block;
  color: var(--color-dark-gray);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
  @media all and (min-width: 1100px) {
    font-size: 1.5rem;
    letter-spacing: 0;
  }
`;

const bannerTop__right = css`
  flex-basis: 60%;

  @media all and (min-width: 500px) {
    flex-basis: 70%;
  }
  @media all and (min-width: 768px) {
        flex-basis: 80%;
  }
`;

const bannerTop__button = css`
  display: none;
  @media all and (min-width: 1100px) {
    display: block;
    margin-left: 2rem;
  }
`;

export function TopBanner() {
  return (
    <Banner>
      <div css={bannerTop__left}>
        <span css={bannerTop__hairline}>Speak out. Be heard.</span>
        <span css={bannerTop__title}>Be counted</span>
      </div>
      <div css={bannerTop__right}>
        <p css={bannerTop__text}>
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <IconButton aria-label="close" css={bannerTop__button}>
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
            <path d="M1 19L19 1M1 1l18 18" />
          </g>
        </svg>
      </IconButton>
    </Banner>
  );
}
