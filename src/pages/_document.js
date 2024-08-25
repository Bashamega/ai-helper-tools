import Banner from "free-ps-banner";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Banner showButton={false}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
