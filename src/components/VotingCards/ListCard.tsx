import { Dispatch, SetStateAction } from "react";
import { css, Theme } from "@emotion/react";
import { ThumbButton } from "./ThumbButton";
import { VoteButton } from "./VoteButton";
import { ImageUrls, SelectedView, SelectedVote } from "src/shared/interfaces";
import { LARGE_CARD, SMALL_CARD } from "src/styles";

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
    #888888 19.79%,
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
`;

const card__lastUpdated = (theme: Theme) => css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 8px 16px;
`;

const card__actions = (
  theme: Theme,
  { hasVoted }: { hasVoted: boolean }
) => css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  > button {
    margin-left: 10px;
  }
  align-items: center;
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
  padding-left: 64px;
  padding-right: 16px;
  padding-top: 8px;
  @media all and (min-width: 768px) {
  }
`;

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
            <ThumbButton ariaLabel={winningCard} selectedView="list" />
          </div>
          <div css={cardOverlay__middleColumn}>
            <div css={card__title}>{name}</div>
            <div css={card__description}>{truncatedDescription}</div>
          </div>
          <div css={cardOverlay__rightColumn}>
            <div css={card__lastUpdated}>
              {!hasVoted ? lastUpdateMsg : "Thank you for voting!"}
            </div>
            <div css={(theme) => card__actions(theme, { hasVoted })}>
              {!hasVoted && (
                <>
                  <ThumbButton
                    ariaLabel="thumbs up"
                    selectedView={selectedView}
                    isSelected={selectedVote === "thumbs up"}
                    handleClick={() =>
                      setSelectedVote((prev) =>
                        prev === "thumbs up" ? null : "thumbs up"
                      )
                    }
                  />
                  <ThumbButton
                    ariaLabel="thumbs down"
                    selectedView={selectedView}
                    isSelected={selectedVote === "thumbs down"}
                    handleClick={() =>
                      setSelectedVote((prev) =>
                        prev === "thumbs down" ? null : "thumbs down"
                      )
                    }
                  />
                </>
              )}
              <VoteButton
                selectedVote={selectedVote}
                setVoteSelection={setSelectedVote}
                hasVoted={hasVoted}
                setHasVoted={setHasVoted}
                submitVote={submitVote}
              />
            </div>
          </div>
        </div>
        {totalVotes && (
          <div css={votesGauge}>
            <span css={(theme) => votesGauge__left(theme, { percentPositive })}>
              <img
                src="/img/thumbs-up.svg"
                alt="thumbs up"
                css={votesGauge__icon}
              />
              {percentPositive}%
            </span>
            <span
              css={(theme) => votesGauge__right(theme, { percentNegative })}
            >
              <img
                src="/img/thumbs-down.svg"
                alt="thumbs down"
                css={votesGauge__icon}
              />
              {percentNegative}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
