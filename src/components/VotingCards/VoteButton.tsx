import { IconButton } from "../shared/styled-components";
import { css, keyframes, Theme } from "@emotion/react";
import { Dispatch, SetStateAction, useState } from "react";
import { SelectedView, SelectedVote } from "src/shared/interfaces";

const voteButton = (
  theme: Theme,
  {
    selectedVote,
    selectedView,
  }: { selectedVote: SelectedVote; selectedView: SelectedView }
) => css`
  height: 38px;
  min-width: 107px;
  color: ${theme.colors.white};
  ${selectedVote
    ? `background-color: rgba(48, 48, 48, 0.6)`
    : `background-color: ${theme.colors.darkerBackground}`};
  border: 1px solid ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  ${selectedView === "list" &&
  `
  @media all and (min-width: 1100px) {
    height: 45px;
    min-width: 135px;
    font-size: 18px;
  }`};
`;

const shake = keyframes`  
  25% {transform: rotate(3deg);}
  50% {transform: rotate(-2deg);}
  75% {transform: rotate(1deg);}
  100% {transform: rotate(0deg);}
`;

const shakeAnimation = css`
  animation-duration: 0.3s;
  animation-name: ${shake};
`;

interface Props {
  selectedVote: SelectedVote;
  selectedView: SelectedView;
  setVoteSelection: Dispatch<SetStateAction<SelectedVote>>;
  hasVoted: boolean;
  setHasVoted: Dispatch<SetStateAction<boolean>>;
  submitVote: (voteSelection: SelectedVote) => Promise<void>;
}
export function VoteButton({
  selectedVote,
  selectedView,
  setVoteSelection,
  hasVoted,
  setHasVoted,
  submitVote,
}: Props) {
  const [showErrorShake, setShowErrorShake] = useState(false);

  const handleVoteClick = async () => {
    if (hasVoted) {
      setHasVoted(false);
      return;
    }
    if (!selectedVote) {
      setShowErrorShake(true);
      return;
    }
    setHasVoted(true);
    setVoteSelection(null);
    await submitVote(selectedVote);
  };

  return (
    <IconButton
      aria-label={hasVoted ? "Vote Again" : "Vote Now"}
      css={[
        (theme) => voteButton(theme, { selectedVote, selectedView }),
        showErrorShake && shakeAnimation,
      ]}
      onClick={handleVoteClick}
      onAnimationEnd={() => setShowErrorShake(false)}
    >
      {hasVoted ? "Vote Again" : "Vote Now"}
    </IconButton>
  );
}
