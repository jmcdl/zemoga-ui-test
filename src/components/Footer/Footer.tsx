import { css, Theme } from "@emotion/react";
import Link from "next/link";

const footer = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 1rem 3rem;
  @media all and (min-width: 768px) {
    align-items: flex-start;
  }
  @media all and (min-width: 1100px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const footer__links = (theme: Theme) => css`
  li {
    padding: 0.5rem 0;
    font-size: 1.25rem;
    a {
      color: ${theme.colors.darkGray};
      text-decoration: none;
      &:hover {
        color: ${theme.colors.darkerGray};
        text-decoration: underline;
      }
    }
  }
  @media all and (min-width: 768px) {
    ul {
      display: flex;
      li {
        padding: 0;
        margin-right: 2rem;
        font-size: 1rem;
      }
    }
  }
`;

const footer__social = (theme: Theme) => css`
  span {
    color: ${theme.colors.darkGray};
    font-size: 1.25rem;
    text-align: right;
  }
  ul {
    display: flex;
    margin-top: 1rem;
    li {
      margin-right: 1rem;
    }
  }
  @media all and (min-width: 768px) {
    display: flex;
    align-items: center;
    span {
      margin-right: 1rem;
      color: ${theme.colors.darkGray};
      font-size: 0.833rem;
    }
    ul {
      margin-top: 3px;
    }
  }
`;

const separator = (theme: Theme) => css`
  border: 0 none;
  border-bottom: 2px dotted ${theme.colors.darkGray};
  margin: 1.5rem 1rem;
  @media all and (min-width: 1100px) {
    margin: 2rem 0;
  }
`;

export function Footer() {
  return (
    <>
      <hr css={separator} role="separator" />
      <footer css={footer}>
        <div css={footer__links}>
          <ul>
            <li>
              <Link href="#">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div css={footer__social}>
          <span>Follow us</span>
          <ul>
            <li>
              <Link href="#">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.467-3.622H16.56V8.771c0-1.048.292-1.763 1.796-1.763h1.918v-3.24a25.663 25.663 0 00-2.795-.143c-2.766 0-4.659 1.688-4.659 4.788v2.671H9.691v3.622h3.128V24H1.325A1.325 1.325 0 010 22.676V1.325A1.325 1.325 0 011.325 0h21.35A1.325 1.325 0 0124 1.325z"
                    fill="#262626"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg width="26" height="23" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.329 6.204c.01.23.01.458.01.687A15.182 15.182 0 01-.008 19.688c.421.05.845.075 1.27.073a10.7 10.7 0 006.627-2.289 5.335 5.335 0 01-4.984-3.704c.798.151 1.62.12 2.404-.094a5.346 5.346 0 01-4.276-5.233v-.073a5.396 5.396 0 002.413.666 5.357 5.357 0 01-1.654-7.127A15.15 15.15 0 0012.79 7.484a5.898 5.898 0 01-.135-1.217 5.336 5.336 0 019.228-3.652 10.612 10.612 0 003.392-1.29 5.368 5.368 0 01-2.351 2.955 10.811 10.811 0 003.07-.843 10.868 10.868 0 01-2.664 2.767z"
                    fill="#262626"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
