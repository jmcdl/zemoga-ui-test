import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: { [key: string]: string };
    colors: {
      greenPositiveLight: string;
      greenPositiveDark: string;
      greenPositiveOverlay: string;
      yellowNegativeLight: string;
      yellowNegativeDark: string;
      yellowNegativeOverlay: string;
      darkBackground: string;
      darkerBackground: string;
      darkerGray: string;
      darkGray: string;
      lightGray: string;
      lightBackground: string;
      lighterBackground: string;
      white: string;
    };
    constants: { [key: string]: string };
  }
}
