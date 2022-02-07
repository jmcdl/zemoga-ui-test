import { IconButton } from "../shared/styled-components";
import { css, Theme } from "@emotion/react";
import { View } from "./VotingCardsContainer";
import { thumbsDownColor, thumbsUpColor } from "src/styles";

const thumbButton = (theme: Theme) => css`
  height: 30px;
  min-width: 30px;
  &:focus {
    border: 2px solid ${theme.colors.white};
  }
`;

const thumbButtonLarge = css`
  @media all and (min-width: 1100px) {
    height: 45px;
    min-width: 45px;
  }
`;

interface Props {
  ariaLabel: "thumbs up" | "thumbs down";
  handleBlur?: () => void;
  handleClick?: () => void;
  selectedView: View;
}
export function ThumbButton({
  ariaLabel,
  handleBlur,
  handleClick,
  selectedView,
}: Props) {
  const imgSrc =
    ariaLabel === "thumbs up" ? "/img/thumbs-up.svg" : "/img/thumbs-down.svg";
  return (
    <IconButton
      aria-label={ariaLabel}
      css={[
        thumbButton,
        ariaLabel === "thumbs up" ? thumbsUpColor : thumbsDownColor,
        selectedView === "list" && thumbButtonLarge,
      ]}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      <img src={imgSrc} alt={ariaLabel} />
    </IconButton>
  );
}
