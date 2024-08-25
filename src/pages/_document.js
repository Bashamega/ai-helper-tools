import Banner from "free-ps-banner";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-gray-700">
        <Banner showButton={false} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
