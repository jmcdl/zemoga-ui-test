import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = css`
  html,
  body {
    width: 100%;
    margin: 0;
    //background-color: var(--color-white);
    font-family: "Lato", sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: blue;
  }
`;

export const ContentContainer = styled.div`
  width: 80%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;
