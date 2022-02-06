import { IconButton, ThumbsUpButton } from "../shared/styled-components";
import { css } from "@emotion/react";
import { View } from "./VotingCardsContainer";

const cardThumbButton = css`
  height: 30px;
  width: 30px;
`;

interface Props {
  ariaLabel: string;
  selectedView: View;
}
export function CardThumbButton({ ariaLabel, selectedView }: Props) {
  return (
    <ThumbsUpButton />
    // <IconButton
    //   aria-label={ariaLabel}
    //   css={[featuredCard__button, thumbsUp]}
    //   color="green"
    // >
    //   <img
    //     src="/img/thumbs-up.svg"
    //     alt="thumbs up"
    //     css={featuredCard__buttonImg}
    //   />
    // </IconButton>
  );
}
