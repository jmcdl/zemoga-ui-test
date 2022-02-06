import { Global, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles, theme } from "src/styles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
