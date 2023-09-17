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
          <script async={true} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5964748910105487"
     crossOrigin="anonymous"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}