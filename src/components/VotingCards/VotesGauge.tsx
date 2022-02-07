import { css, Theme } from "@emotion/react";

const votesGauge = css`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 36px;
`;

const votesGauge__left = (
  theme: Theme,
  { percentPositive }: { percentPositive: number }
) => css`
  position: relative;
  display: flex;
  width: ${percentPositive}%;
  align-items: center;
  padding-left: 1rem;
  background-color: ${theme.colors.greenPositiveOverlay};
  color: ${theme.colors.white};
  font-size: 18px;
  justify-content: flex-start;
`;

const votesGauge__right = (
  theme: Theme,
  { percentNegative }: { percentNegative: number }
) =>
  css`
    display: flex;
    background-color: ${theme.colors.yellowNegativeOverlay};
    color: ${theme.colors.white};
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
    width: ${percentNegative}%;
    font-size: 18px;
  `;

const votesGauge__icon = css`
  height: 15px;
  width: 15px;
  padding: 6px;
`;

interface Props {
  percentPositive: number;
  percentNegative: number;
}

export function VotesGauge({ percentPositive, percentNegative }: Props) {
  return (
    <div css={votesGauge}>
      <span css={(theme) => votesGauge__left(theme, { percentPositive })}>
        <img src="/img/thumbs-up.svg" alt="thumbs up" css={votesGauge__icon} />
        {percentPositive}%
      </span>
      <span css={(theme) => votesGauge__right(theme, { percentNegative })}>
        <img
          src="/img/thumbs-down.svg"
          alt="thumbs down"
          css={votesGauge__icon}
        />
        {percentNegative}%
      </span>
    </div>
  );
}
