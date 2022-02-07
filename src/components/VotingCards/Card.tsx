import { css, Theme } from "@emotion/react";
import { formatDistanceToNow } from "date-fns";
import { ThumbButton } from "./ThumbButton";
import { VoteButton } from "./VoteButton";
import { useState } from "react";

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

const cardOverlay = css`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

const card__title = (theme: Theme) => css`
  display: flex;
  color: ${theme.colors.white};
  height: 40%;
  font-size: 30px;
  line-height: 36px;
  align-items: flex-end;
`;

const card__description = (theme: Theme) => css`
  display: flex;
  color: ${theme.colors.white};
  font-size: 15px;
  line-height: 18px;
  padding: 8px 40px;
  overflow: hidden;
`;

const card__lastUpdated = (theme: Theme) => css`
  display: flex;
  justify-content: flex-end;
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  padding: 8px 40px;
  text-transform: capitalize;
`;
const card__actions = (
  theme: Theme,
  { hasVoted }: { hasVoted: boolean }
) => css`
  display: flex;
  ${hasVoted ? `justify-content: flex-end` : `justify-content: space-between`};
  align-items: center;
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  padding: 8px 16px;
  margin-left: 70px;
  margin-right: 10px;
  text-transform: capitalize;
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

export type Vote = "up" | "down" | null;

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
  // use Math.round to get a number with a single decimal place, but only if it's not zero
  const percentPositive = Math.round((positive / totalVotes) * 1000) / 10;
  const percentNegative = Math.round((100 - percentPositive) * 10) / 10;
  const winningCard =
    percentPositive > percentNegative ? "thumbs up" : "thumbs down";

  const timeSinceLastVote = formatDistanceToNow(new Date(lastUpdated));

  const truncatedDescription =
    description.length > 60 ? `${description.slice(0, 60)}...` : description;

  const [vote, setVote] = useState<Vote>(null);
  const [hasVoted, setHasVoted] = useState(false);

  console.log("vote", vote);
  console.log("hasVoted", hasVoted);

  return (
    <div css={card}>
      <img src={picture} alt={name} />
      <div css={cardOverlay}>
        <div css={card__title}>
          <ThumbButton ariaLabel={winningCard} selectedView="list" />
          {name}
        </div>
        <div css={card__description}>{truncatedDescription}</div>
        <div css={card__lastUpdated}>
          {timeSinceLastVote} in {category}
        </div>
        <div css={(theme) => card__actions(theme, { hasVoted })}>
          {!hasVoted && (
            <>
              <ThumbButton
                ariaLabel="thumbs up"
                selectedView="list"
                handleBlur={() => setVote(null)}
                handleClick={() => setVote("up")}
              />
              <ThumbButton
                ariaLabel="thumbs down"
                selectedView="list"
                handleBlur={() => setVote(null)}
                handleClick={() => setVote("down")}
              />
            </>
          )}
          <VoteButton
            vote={vote}
            hasVoted={hasVoted}
            setHasVoted={setHasVoted}
          />
        </div>
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
