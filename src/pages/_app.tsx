import { GlobalStyles } from "@/styles/globalStyles";

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "nprogress/nprogress.css";
import { defaultTheme } from "@/styles/default";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
