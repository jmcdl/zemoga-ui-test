import { ThumbButton } from "./ThumbButton";
import { VoteButton } from "./VoteButton";
import { SelectedView, SelectedVote } from "../../shared/interfaces";
import { Dispatch, SetStateAction } from "react";
import { css, Theme } from "@emotion/react";

const gridActions = (theme: Theme, { hasVoted }: { hasVoted?: boolean }) => css`
  display: flex;
  ${hasVoted ? `justify-content: flex-end` : `justify-content: space-between`};
  align-items: center;
  color: ${theme.colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 8px 16px;
  margin-left: 70px;
  margin-right: 10px;
  text-transform: capitalize;
  @media all and (min-width: 768px) {
    padding: 8px 32px;
    margin-left: 90px;
    height: 46px;
  }
`;

const listActions = (theme: Theme) => css`
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
`;

interface Props {
  hasVoted: boolean;
  selectedView: SelectedView;
  selectedVote: SelectedVote;
  setSelectedVote: Dispatch<SetStateAction<SelectedVote>>;
  setHasVoted: Dispatch<SetStateAction<boolean>>;
  submitVote: (selectedVote: SelectedVote) => Promise<void>;
}
export function CardActions({
  hasVoted,
  selectedView,
  selectedVote,
  setSelectedVote,
  setHasVoted,
  submitVote,
}: Props) {
  return (
    <div
      css={[
        selectedView === "grid"
          ? (theme) => gridActions(theme, { hasVoted })
          : (theme) => listActions(theme),
      ]}
    >
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
        selectedView={selectedView}
        setVoteSelection={setSelectedVote}
        hasVoted={hasVoted}
        setHasVoted={setHasVoted}
        submitVote={submitVote}
      />
    </div>
  );
}
