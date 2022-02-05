import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const theme: Theme = {
  colors: {
    greenPositiveLight: `rgba(60, 187, 180, .8)`,
    greenPositiveDark: `rgba(60, 187, 180, 1)`,
    yellowPositiveLight: `rgba(249, 173, 29, .8)`,
    yellowPositiveDark: `rgba(249, 173, 29, 1)`,
    darkBackground: `rgba(0, 0, 0, .4)`,
    darkerBackground: `rgba(0, 0, 0, .6)`,
    darkerGray: `rgba(51, 51, 51, 1)`,
    darkGray: `rgba(70, 70, 70, 1)`,
    lightGray: `rgba(235, 235, 235, 1)`,
    lightBackground: `rgba(255, 255, 255, .4)`,
    lighterBackground: `rgba(255, 255, 255, .8)`,
    white: `rgba(255, 255, 255, 1)`,
  },
  breakpoints: {
    large: "1024px",
    medium: "768px",
    small: "640px",
  },
  constants: {
    navbarHeight: "50px",
    footerHeight: "85px",
  },
};

export const globalStyles = (theme: Theme) => css`
  html,
  body {
    width: 100%;
    margin: 0;
    background-color: ${theme.colors.white};
    font-family: "Lato", sans-serif;
    font-size: 12px;
    font-weight: 400;
  }

  body {
    position: relative;
  }

  a,
  a:visited {
    color: var(--color-white);
  }

  button {
    font-family: "Lato", sans-serif;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  @media all and (min-width: 768px) {
    html,
    body {
      font-size: 14px;
    }
  }

  @media all and (min-width: 1100px) {
    html,
    body {
      font-size: 18px;
    }
  }
`;
