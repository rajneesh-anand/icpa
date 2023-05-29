import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "@utils/ga";

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `              
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());            
              gtag('config', '${GA_TRACKING_ID}', {
                page: window.location.pathname
            });              
          `,
            }}
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
