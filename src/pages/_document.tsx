import { Html, Head, Main, NextScript } from "next/document";
/* import "@fontsource/inter/500.css";
import "@fontsource/puritan/700.css";
import "@fontsource/ubuntu/700.css";
import "@fontsource/raleway/700.css";
import "@fontsource/montserrat/700.css"; */
export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
