import { IconButton } from "../shared/styled-components";
import { css, Theme } from "@emotion/react";
import { thumbsDownColor, thumbsUpColor } from "src/styles";
import { SelectedView, SelectedVote } from "src/shared/interfaces";

const thumbButton = css`
  height: 30px;
  min-width: 30px;
`;

const thumbButtonLarge = css`
  @media all and (min-width: 1100px) {
    height: 45px;
    min-width: 45px;
  }
`;

const selectedStyle = (theme: Theme) => css`
  border: 2px solid ${theme.colors.white};
`;

interface Props {
  ariaLabel: SelectedVote;
  selectedView: SelectedView;
  handleClick?: () => void;
  isSelected?: boolean;
}
export function ThumbButton({
  ariaLabel,
  handleClick,
  isSelected,
  selectedView,
}: Props) {
  const imgSrc =
    ariaLabel === "thumbs up" ? "/img/thumbs-up.svg" : "/img/thumbs-down.svg";
  return (
    <IconButton
      aria-label={ariaLabel ?? ""}
      css={[
        thumbButton,
        ariaLabel === "thumbs up"
          ? (theme) => thumbsUpColor(theme, Boolean(handleClick))
          : (theme) => thumbsDownColor(theme, Boolean(handleClick)),
        selectedView === "list" && thumbButtonLarge,
        isSelected && selectedStyle,
      ]}
      onClick={handleClick}
    >
      <img src={imgSrc} alt={ariaLabel ?? ""} />
    </IconButton>
  );
}
