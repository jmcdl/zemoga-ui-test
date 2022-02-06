import { css, Theme } from "@emotion/react";
import { IconButton } from "src/shared/styled-components";

const hero__featuredCard = css`
  position: relative;
  top: 5.5rem;
  left: 1rem;
  overflow: hidden;
  width: 55vw;
  max-height: 25rem;
  @media all and (min-width: 1100px) {
    left: 0;
    width: 50%;
    min-width: 600px;
    max-height: unset;
    margin-top: 2.5rem;
  }
`;

const featuredCard__glassBackground = (theme: Theme) => css`
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: center no-repeat
      linear-gradient(
        ${theme.colors.darkBackground},
        ${theme.colors.darkBackground}
      ),
    -25vw 0/160vw no-repeat url("/img/pope-francis.png");
  filter: blur(1rem);
  @media all and (min-width: 768px) {
    background: center no-repeat
        linear-gradient(
        ${theme.colors.darkBackground},
        ${theme.colors.darkBackground}
        ),
      7vw -6.5rem/115vw auto no-repeat url("/img/pope-francis.png");
  }
  @media all and (min-width: 1100px) {
    background: center no-repeat
        linear-gradient(
        ${theme.colors.darkBackground},
        ${theme.colors.darkBackground}
        ),
      calc(-50vw + 650px) -6rem/105vw auto no-repeat url("/img/pope-francis.png");
  }
`;

const featuredCard__content = (theme: Theme) => css`
  position: relative;
  padding: 1rem;
  color: ${theme.colors.white};
  @media all and (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
  @media all and (min-width: 1100px) {
    padding: 2rem 1.5rem;
  }
`;

const featuredCard__hairline = css`
  margin: 0;
  font-weight: 300;
  white-space: nowrap;
`;

const featuredCard__title = css`
  margin: 0;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1;
`;

const featuredCard__desc = css`
  display: -webkit-box;
  overflow: hidden;
  max-height: 10.5rem;
  margin: 1rem 0;
  -webkit-box-orient: vertical;
  font-size: 1.25rem;
  font-weight: 300;
  -webkit-line-clamp: 6;
  text-overflow: ellipsis;
  @media all and (min-width: 1100px) {
    max-width: 85%;
    margin: 2rem 0 1rem;
  }
`;

const featuredCard__moreInfo = css`
  display: none;
  @media all and (min-width: 768px) {
    display: inline-block;
    margin: 0;
    font-weight: 300;
  }
`;

const featuredCard__moreInfoIcon = css`
  width: 1.5rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

const featuredCard__cta = css`
  font-weight: 700;
  @media all and (min-width: 1100px) {
    margin: 1rem 0 2rem;
    font-size: 1.5rem;
  }
`;

const featuredCard__buttons = css`
  display: flex;
  justify-content: space-between;
  margin: 0 -1rem -1rem;
  @media all and (min-width: 768px) {
    margin: 0 -1.5rem -2rem;
    @media all and (min-width: 1100px) {
      margin: 0 -1.5rem -2rem;
    }
  }
`;

const featuredCard__button = css`
  width: 50%;
  height: 2.75rem;
  @media all and (min-width: 1100px) {
    height: auto;
  }
`;

const thumbsUp = (theme: Theme) => css`
  background-color: ${theme.colors.greenPositiveDark};
  &:hover {
    background-color: ${theme.colors.greenPositiveLight};
  }
`;

const thumbsDown = (theme: Theme) => css`
  background-color: ${theme.colors.yellowPositiveDark};
  &:hover {
    background-color: ${theme.colors.yellowPositiveLight};
  }
`;

const featuredCard__buttonImg = css`
  max-width: 1.25rem;
  height: 100%;
  width: 100%;
  @media all and (min-width: 1100px) {
    max-width: 2rem;
    height: 2rem;
    margin: 1.3rem 0;
  }
`;

export function FeaturedCard() {
  return (
    <div css={hero__featuredCard}>
      <div css={featuredCard__glassBackground} />
      <div css={featuredCard__content}>
        <p css={featuredCard__hairline}>What&apos;s your opinion on</p>
        <h2 css={featuredCard__title}>Pope Francis?</h2>
        <p css={featuredCard__desc}>
          He&apos;s talking tough on clergy sexual abuse, or is he just another
          pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumbs up)
        </p>
        <p css={featuredCard__moreInfo}>
          <a href="http://wikipedia.com">
            <svg
              css={featuredCard__moreInfoIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 18"
            >
              <path
                d="M27 .303c0 .1-.032.2-.09.28a.255.255 0 01-.2.125 2.46 2.46 0 00-1.453.602 5.676 5.676 0 00-1.166 1.952l-6.127 14.533c-.04.135-.152.203-.337.203a.374.374 0 01-.337-.203l-3.436-7.564-3.952 7.564a.374.374 0 01-.337.203.34.34 0 01-.349-.203L3.196 3.262a5.052 5.052 0 00-1.19-1.89A3.161 3.161 0 00.267.708.23.23 0 01.086.6.378.378 0 010 .355C0 .118.064 0 .192 0 .73 0 1.29.025 1.876.075c.544.053 1.056.078 1.536.078.49 0 1.067-.026 1.732-.078C5.839.025 6.456 0 6.994 0c.128 0 .192.118.192.355 0 .235-.04.352-.119.352a2.308 2.308 0 00-1.268.43c-.297.22-.47.581-.463.963.015.263.08.521.192.757l4.975 11.826 2.824-5.614-2.631-5.807A7.637 7.637 0 009.53 1.257a2.274 2.274 0 00-1.382-.55A.208.208 0 017.986.6a.4.4 0 01-.078-.245c0-.237.054-.355.168-.355.494-.002.987.023 1.477.075.46.054.92.08 1.382.078.48 0 .988-.026 1.525-.078C13.013.025 13.558 0 14.094 0c.128 0 .192.118.192.355 0 .235-.038.352-.119.352-1.073.078-1.61.399-1.61.963.047.414.174.814.373 1.175l1.74 3.72 1.732-3.403c.209-.37.333-.786.36-1.215 0-.775-.536-1.188-1.61-1.24-.097 0-.144-.117-.144-.352a.44.44 0 01.071-.24c.05-.077.098-.115.145-.115.385 0 .857.025 1.418.075.536.053.978.078 1.322.078a13.6 13.6 0 001.093-.065A16.806 16.806 0 0120.584 0c.095 0 .142.1.142.303 0 .27-.088.405-.263.405-.54.036-1.061.224-1.508.544a6.937 6.937 0 00-1.423 2.01l-2.308 4.492 3.125 6.702 4.614-11.294c.149-.36.23-.745.24-1.137 0-.828-.537-1.267-1.61-1.317-.097 0-.145-.118-.145-.353 0-.237.071-.355.216-.355.392 0 .857.025 1.394.075.496.053.914.078 1.25.078.409-.003.818-.03 1.224-.078.483-.05.915-.075 1.3-.075.111 0 .168.1.168.303z"
                fill="#FFF"
              />
            </svg>
            More information
          </a>
        </p>
        <p css={featuredCard__cta}>What’s Your Verdict?</p>
        <div css={featuredCard__buttons}>
          <IconButton
            aria-label="thumbs up"
            css={[featuredCard__button, thumbsUp]}
            color="green"
          >
            <img
              src="/img/thumbs-up.svg"
              alt="thumbs up"
              css={featuredCard__buttonImg}
            />
          </IconButton>
          <IconButton
            aria-label="thumbs down"
            css={[featuredCard__button, thumbsDown]}
          >
            <img
              src="/img/thumbs-down.svg"
              alt="thumbs down"
              css={featuredCard__buttonImg}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
