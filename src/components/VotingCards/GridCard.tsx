import { Dispatch, SetStateAction } from "react";
import { css, Theme } from "@emotion/react";
import { ThumbButton } from "./ThumbButton";
import { ImageUrls, SelectedView, SelectedVote } from "src/shared/interfaces";
import { LARGE_CARD, SMALL_CARD } from "src/styles";
import { VotesGauge } from "./VotesGauge";
import { CardActions } from "./CardActions";

const card = css`
  position: relative;
  height: ${SMALL_CARD}px;
  width: ${SMALL_CARD}px;
  > img {
    position: absolute;
    height: ${SMALL_CARD}px;
    width: ${SMALL_CARD}px;
  }
  @media all and (min-width: 768px) {
    margin: auto;
    height: ${LARGE_CARD}px;
    width: ${LARGE_CARD}px;
    > img {
      position: absolute;
      height: ${LARGE_CARD}px;
      width: ${LARGE_CARD}px;
    }
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
  align-items: flex-end;
  @media all and (min-width: 768px) {
    height: 42%;
  }
  @media all and (min-width: 1100px) {
    font-size: 36px;
    > button {
      margin-right: 6px;
    }
  }
`;

const card__description = (theme: Theme) => css`
  display: flex;
  color: ${theme.colors.white};
  font-size: 15px;
  padding: 8px 40px;
  overflow: hidden;
`;

const card__lastUpdated = (theme: Theme) => css`
  display: flex;
  justify-content: flex-end;
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 8px 40px;
`;

interface CardProps {
  imgUrls: ImageUrls;
  winningCard: SelectedVote;
  truncatedDescription: string;
  hasVoted: boolean;
  lastUpdateMsg: string;
  selectedView: SelectedView;
  selectedVote: SelectedVote;
  setSelectedVote: Dispatch<SetStateAction<SelectedVote>>;
  setHasVoted: Dispatch<SetStateAction<boolean>>;
  submitVote: (selectedVote: SelectedVote) => Promise<void>;
  totalVotes: number;
  percentPositive: number;
  percentNegative: number;
  name: string;
}

export function GridCard({
  imgUrls,
  winningCard,
  truncatedDescription,
  hasVoted,
  lastUpdateMsg,
  selectedView,
  selectedVote,
  setSelectedVote,
  setHasVoted,
  submitVote,
  totalVotes,
  percentPositive,
  percentNegative,
  name,
}: CardProps) {
  return (
    <div css={card}>
      <img
        srcSet={`${imgUrls.small} 750w, ${imgUrls.big} 1440w`}
        sizes="(min-width: 750px) 1440px, 100vw"
        src={imgUrls.small}
        alt={name}
      />
      <div css={cardOverlay}>
        <div css={card__title}>
          <ThumbButton ariaLabel={winningCard} selectedView={selectedView} />
          {name}
        </div>
        <div css={card__description}>{truncatedDescription}</div>
        <div css={card__lastUpdated}>
          {!hasVoted ? lastUpdateMsg : "Thank you for voting!"}
        </div>
        <CardActions
          selectedView={selectedView}
          selectedVote={selectedVote}
          setSelectedVote={setSelectedVote}
          setHasVoted={setHasVoted}
          submitVote={submitVote}
          hasVoted={hasVoted}
        />
        {totalVotes && (
          <VotesGauge
            percentNegative={percentNegative}
            percentPositive={percentPositive}
          />
        )}
      </div>
    </div>
  );
}
