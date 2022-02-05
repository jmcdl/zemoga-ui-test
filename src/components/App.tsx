import { Global, ThemeProvider } from "@emotion/react";
import { globalStyles } from "../styles/styles";
import { theme } from "../styles/theme";
// import { NavBar } from "./nav-bar";

export function App(): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <h1>Hello</h1>
      </ThemeProvider>
    </>
  );
}
