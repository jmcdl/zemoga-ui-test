import { Dispatch, SetStateAction } from "react";
import { css, Theme } from "@emotion/react";
import { ThumbButton } from "./ThumbButton";
import { ImageUrls, SelectedView, SelectedVote } from "src/shared/interfaces";
import { VotesGauge } from "./VotesGauge";
import { CardActions } from "./CardActions";

const card = css`
  position: relative;
  width: 100%;
  > img {
    position: absolute;
    height: 100%;
  }
`;

const cardOverlay = css`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.0001) 0%,
    #888888 13.79%,
    #666666 50%,
    rgba(51, 51, 51, 0.6) 71.88%
  );
`;

const cardOverlay__columns = css`
  display: flex;
  height: 100%;
`;

const cardOverlay__leftColumn = css`
  flex: 1;
`;

const cardOverlay__middleColumn = css`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const cardOverlay__rightColumn = css`
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 50%;
  @media all and (min-width: 1100px) {
    height: 60%;
  }
`;

const card__title = (theme: Theme) => css`
  display: flex;
  color: ${theme.colors.white};
  font-size: 28px;
  align-items: flex-start;
  justify-content: space-between;
  @media all and (min-width: 768px) {
    height: 36%;
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
  font-size: 14px;
  overflow: hidden;
  @media all and (min-width: 1100px) {
    font-size: 18px;
  }
`;

const card__lastUpdated = (theme: Theme) => css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 8px 16px;
  @media all and (min-width: 1100px) {
    font-size: 17px;
  }
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

export function ListCard({
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
        <div css={cardOverlay__columns}>
          <div css={cardOverlay__leftColumn}>
            <ThumbButton ariaLabel={winningCard} selectedView={selectedView} />
          </div>
          <div css={cardOverlay__middleColumn}>
            <div css={card__title}>{name}</div>
            <div css={card__description}>{truncatedDescription}</div>
          </div>
          <div css={cardOverlay__rightColumn}>
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
          </div>
        </div>
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
