import { css, Theme } from "@emotion/react";
import { ThumbButton } from "./ThumbButton";

const card = css`
  position: relative;
  height: 300px;
  width: 300px;
  > img {
    position: absolute;
    height: 300px;
    width: 300px;
  }
`;

const card__overlay = css`
  position: relative;
  width: 100%;
  height: 70%;
  top: 30%;
`;

const votesGauge = css`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 3rem;
`;

const votesGauge__left = (
  theme: Theme,
  { percentPositive }: { percentPositive: string }
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
  { percentNegative }: { percentNegative: string }
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

interface CardProps {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: { positive: number; negative: number };
}
export function Card({
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
}: CardProps) {
  const { positive, negative } = votes;
  const totalVotes = positive + negative;
  const percentPositive = ((positive / totalVotes) * 100).toFixed(1);
  const percentNegative = ((negative / totalVotes) * 100).toFixed(1);

  return (
    <div css={card}>
      <img src={picture} alt={name} />
      <div css={card__overlay}>
        <ThumbButton ariaLabel="thumbs up" selectedView="list" />
        <ThumbButton ariaLabel="thumbs down" selectedView="list" />
        <div css={votesGauge}>
          <span css={(theme) => votesGauge__left(theme, { percentPositive })}>
            <img
              src="/img/thumbs-up.svg"
              alt="thumbs up"
              css={votesGauge__icon}
            />
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
      </div>
    </div>
  );
}
