import { IconButton } from "../shared/styled-components";
import { css, Theme } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";
import { Vote } from "src/shared/interfaces";

const voteButton = (theme: Theme, { vote }: { vote: Vote }) => css`
  height: 38px;
  min-width: 107px;
  color: ${theme.colors.white};
  ${vote
    ? `background-color: rgba(48, 48, 48, 0.6)`
    : `background-color: ${theme.colors.darkerBackground}`};
  border: 1px solid ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 18px;
`;

interface Props {
  vote: Vote;
  hasVoted: boolean;
  setHasVoted: Dispatch<SetStateAction<boolean>>;
}
export function VoteButton({ vote, hasVoted, setHasVoted }: Props) {
  const handleVoteClick = () => {
    if (hasVoted) {
      setHasVoted(false);
      return
    }
    // do async stuff
    setHasVoted(true);
  };

  return (
    <IconButton
      aria-label={hasVoted ? "Vote Again" : "Vote Now"}
      css={(theme) => voteButton(theme, { vote })}
      onClick={handleVoteClick}
    >
      {hasVoted ? "Vote Again" : "Vote Now"}
    </IconButton>
  );
}
