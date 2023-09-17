import Document, { Html, Head, Main,NextScript  } from 'next/document';
import { Analytics } from '@vercel/analytics/react';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async={true}
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
        </Head>
        <body>
          <Main />
          <Analytics />
          <NextScript />
        </body>
      </Html>
    )
  }
}