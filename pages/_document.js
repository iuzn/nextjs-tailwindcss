import Document, { Html, Head, Main, NextScript } from "next/document";

import { config as x } from "../config";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang={x.lang}>
        <Head>
          <link rel="preconnect" href={x.webSite} />
          {x.fonts.map((font) => {
            return (
              <link href={font.fontLink} rel="stylesheet" key={font.fontName} />
            );
          })}
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <link rel="manifest" href={"/static/site.webmanifest"} />
          <meta name="application-name" content={x.name} />
          <meta name="description" content={x.description} />
          <meta name="apple-mobile-web-app-title" content={x.name} />
          <link rel="shortcut icon" href={x.shortcutIcon} />
          <link rel="mask-icon" href={x.maskIcon} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={x.appleTouchIcon}
          />
          <link rel="icon" type="image/png" sizes="32x32" href={x.icon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={x.icon16} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="lack-translucent"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-TileColor" content={x.tileColor} />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content={x.themeColor} />
        </Head>
        <body
            className="bg-white text-gray-600 antialiased
      dark:bg-gray-900 dark:text-gray-400"
        >
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
