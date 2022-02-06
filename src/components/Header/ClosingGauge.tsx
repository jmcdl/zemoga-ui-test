import { css, Theme } from "@emotion/react";

const hero__closingGauge = (theme: Theme) => css`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: ${theme.colors.lightBackground};
`;

const closingGauge__left = (theme: Theme) => css`
  position: relative;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.25rem 0 0;
  background-color: ${theme.colors.darkBackground};
  color: ${theme.colors.white};
  font-weight: 300;
  text-transform: uppercase;
  &:after {
    position: absolute;
    right: -0.5rem;
    display: block;
    width: 0;
    height: 0;
    border-top: 0.25rem solid transparent;
    border-bottom: 0.25rem solid transparent;
    border-left: 0.5rem solid ${theme.colors.darkBackground};
    content: " ";
  }
  @media all and (min-width: 1100px) {
    padding-right: 1rem;
    &:after {
      border-top-width: 0.33rem;
      border-bottom-width: 0.33rem;
    }
  }
`;

const closingGauge__title = css`
  @media all and (min-width: 1100px) {
    font-size: 1.25rem;
  }
`;

const closingGauge__right = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 0 0.75rem;
  @media all and (min-width: 1100px) {
    padding-left: 1rem;
  }
`;

const closingGauge__number = (theme: Theme) => css`
  color: ${theme.colors.darkGray};
  font-size: 1.5rem;
  font-weight: 400;
  @media all and (min-width: 1100px) {
    font-size: 2rem;
  }
`;

const closingGauge__desc = (theme: Theme) => css`
  color: ${theme.colors.darkGray};
  font-size: 1.5rem;
  font-weight: 300;
  @media all and (min-width: 1100px) {
    font-size: 2rem;
  }
`;

export function ClosingGauge() {
  return (
    <div css={hero__closingGauge}>
      <div css={closingGauge__left}>
        <span css={closingGauge__title}>closing in</span>
      </div>
      <div css={closingGauge__right}>
        <span css={closingGauge__number}>22</span>
        <span css={closingGauge__desc}>days</span>
      </div>
    </div>
  );
}
