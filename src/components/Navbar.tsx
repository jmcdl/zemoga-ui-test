import Image from "next/image";
import Link from "next/link";
import { css, Theme } from "@emotion/react";
import { IconButton, MaxContentContainer } from "../shared/styled-components";
import { MouseEvent, useState } from "react";
import search from "/public/img/search.svg";

const nav = css`
  position: fixed;
  z-index: 2;
  top: 0;
  display: flex;
  width: calc(100vw - 2rem);
  min-height: 10rem;
  justify-content: space-between;
  padding: 0 1rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  @media all and (min-width: 1100px) {
    min-height: 22vh;
  }
`;

const nav__links = (theme: Theme) => css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: calc(100vh - 4rem);
  flex-direction: column;
  padding: 4rem 0 2rem;
  background-color: ${theme.colors.darkerBackground};
  transform: translateX(100vw);
  li {
    width: 100%;
    margin: 3rem 0;
    font-size: 2rem;
    text-align: center;
    &:last-child {
      order: -1;
    }
  }
  a {
    color: ${theme.colors.white};
    text-decoration: none;
  }

  @media all and (min-width: 1100px) {
    position: absolute;
    top: 3rem;
    right: 0;
    left: auto;
    width: 40vw;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    background-color: transparent;
    transform: translateX(0);

    li {
      width: fit-content;
      margin: 0 1rem 0 0;
      font-size: 1rem;
      font-weight: 300;
      text-align: right;
    }

    li:last-child {
      order: 0;
    }
  }
`;

const nav__logo = (theme: Theme) => css`
  margin: 2.5rem 0 0;
  color: ${theme.colors.white};
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
  @media all and (min-width: 1100px) {
    margin-top: 3rem;
  }
`;

const nav__hamburger = css`
  position: relative;
  top: 2rem;
  right: 1rem;
  width: 25px;
  height: 20px;
  @media all and (min-width: 1100px) {
    display: none;
    &:focus + .nav__links {
      transform: translateX(0);
    }
  }
`;

const translate = css`
  transform: translateX(0);
`;

const nav__search = css`
  width: 24px;
  height: 24px;
  margin-left: 0.5rem;

  @media all and (min-width: 1100px) {
    width: 2rem;
    height: 2rem;
  }
`;

const nav__searchInput = (theme: Theme) => css`
  width: 25vw;
  border: 0;
  border-bottom: 2px solid ${theme.colors.white};
  background-color: transparent;
  border-radius: 0;
  color: ${theme.colors.white};
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  transition: width 0.2s ease-in;
  &:focus {
    width: 60vw;
    outline: 0 none;
  }
  @media all and (min-width: 1100px) {
    display: none;
  }
`;

export function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const hideMobileMenu = (event: MouseEvent) => {
    if (event.target === event.currentTarget) {
      setShowMobileMenu(false);
    }
  };

  return (
    <nav css={nav} role="navigation">
      <MaxContentContainer>
        <h1 css={nav__logo}>Rule of thumb.</h1>
        <IconButton
          aria-label="thumbs up"
          css={nav__hamburger}
          onClick={() => setShowMobileMenu(true)}
          title="Open Menu"
        >
          <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" />
          </svg>
        </IconButton>
        <ul
          css={[nav__links, showMobileMenu && translate]}
          onClick={hideMobileMenu}
        >
          <li>
            <Link href="/">Past Trials</Link>
          </li>
          <li>
            <Link href="/">How It Works</Link>
          </li>
          <li>
            <Link href="/">Login / Sign Up</Link>
          </li>
          <li>
            <form>
              <input css={nav__searchInput} aria-label="search" type="text" />
              <IconButton css={nav__search} title="Search" type="submit">
                <Image src={search} alt="search" />
              </IconButton>
            </form>
          </li>
        </ul>
      </MaxContentContainer>
    </nav>
  );
}
