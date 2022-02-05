import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../styles/styles";
import { theme } from "../styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
