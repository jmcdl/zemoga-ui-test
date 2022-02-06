import { IconButton } from "../shared/styled-components";
import { css } from "@emotion/react";
import { View } from "./VotingCardsContainer";
import { thumbsDownColor, thumbsUpColor } from "src/styles";

const thumbButton = css`
  height: 30px;
  width: 30px;
`;

const thumbButtonLarge = css`
  @media all and (min-width: 1100px) {
    height: 45px;
    width: 45px;
  }
`;

interface Props {
  ariaLabel: "thumbs up" | "thumbs down";
  selectedView: View;
}
export function ThumbButton({ ariaLabel, selectedView }: Props) {
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
    >
      <img
        src={imgSrc}
        alt={ariaLabel}
      />
    </IconButton>
  );
}
