import { IconButton } from "../shared/styled-components";
import { css, Theme } from "@emotion/react";

const voteButton = (theme: Theme) => css`
  height: 38px;
  min-width: 107px;
  color: ${theme.colors.white};
  background-color: rgba(48, 48, 48, 0.6);
  border: 1px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 18px;
`;

export function VoteButton() {
  return (
    <IconButton aria-label="vote now" css={voteButton}>
      Vote Now
    </IconButton>
  );
}
