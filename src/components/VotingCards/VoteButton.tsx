import { IconButton } from "../shared/styled-components";
import { css, Theme } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { VoteSelection } from "src/shared/interfaces";

const voteButton = (
  theme: Theme,
  { voteSelection }: { voteSelection: VoteSelection }
) => css`
  height: 38px;
  min-width: 107px;
  color: ${theme.colors.white};
  ${
    voteSelection
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
  voteSelection: VoteSelection;
  hasVoted: boolean;
  setHasVoted: Dispatch<SetStateAction<boolean>>;
  submitVote: (voteSelection: VoteSelection) => Promise<void>;
}
export function VoteButton({
  voteSelection,
  hasVoted,
  setHasVoted,
  submitVote,
}: Props) {

  const handleVoteClick = async () => {
    if (hasVoted) {
      setHasVoted(false);
    } else {
      await submitVote(voteSelection);
      setHasVoted(true);
    }
  };

  return (
    <IconButton
      aria-label={hasVoted ? "Vote Again" : "Vote Now"}
      css={(theme) => voteButton(theme, { voteSelection })}
      onClick={handleVoteClick}
    >
      {hasVoted ? "Vote Again" : "Vote Now"}
    </IconButton>
  );
}
