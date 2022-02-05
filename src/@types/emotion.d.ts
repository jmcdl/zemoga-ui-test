import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: { [key: string]: string };
    colors: { [key: string]: string };
    // fonts: { [key: string]: string };
    constants: { [key: string]: string };
  }
}
