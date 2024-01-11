import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import materialTheme, { roboto } from "@/material-theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className={roboto.className}>
        <Head>
          <meta
            name="theme-color"
            content={materialTheme.palette.primary.main}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
