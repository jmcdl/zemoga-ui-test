import { IconButton } from "../shared/styled-components";
import { css, Theme } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { SelectedVote } from "src/shared/interfaces";

const voteButton = (
  theme: Theme,
  { selectedVote }: { selectedVote: SelectedVote }
) => css`
  height: 38px;
  min-width: 107px;
  color: ${theme.colors.white};
  ${
    selectedVote
      ? `background-color: rgba(48, 48, 48, 0.6)`
      : `background-color: ${theme.colors.darkerBackground}`
  };
  border: 1px solid ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 18px;
`;

interface Props {
  selectedVote: SelectedVote;
  setVoteSelection: Dispatch<SetStateAction<SelectedVote>>;
  hasVoted: boolean;
  setHasVoted: Dispatch<SetStateAction<boolean>>;
  submitVote: (voteSelection: SelectedVote) => Promise<void>;
}
export function VoteButton({
  selectedVote,
  setVoteSelection,
  hasVoted,
  setHasVoted,
  submitVote,
}: Props) {

  const handleVoteClick = async () => {
    if (hasVoted) {
      setHasVoted(false);
    } else {
      setHasVoted(true);
      setVoteSelection(null)
      await submitVote(selectedVote);
    }
  };

  return (
    <IconButton
      aria-label={hasVoted ? "Vote Again" : "Vote Now"}
      css={(theme) => voteButton(theme, { selectedVote })}
      onClick={handleVoteClick}
    >
      {hasVoted ? "Vote Again" : "Vote Now"}
    </IconButton>
  );
}
