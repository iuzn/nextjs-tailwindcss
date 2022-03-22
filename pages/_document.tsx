import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html
        lang="en"
        className="dark "
      >
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={'/assets/favicon-180.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={'/assets/favicon-32.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={'/assets/favicon-16.png'}
          />
          {/*TODO <link rel="manifest" href={"/assets/site.webmanifest"} />*/}
          <link rel="mask-icon" href={'/assets/logo.svg'} color="#38bdf8" />
          <link rel="shortcut icon" href={'/assets/logo.png'} />
          <meta name="apple-mobile-web-app-title" content="Notion Social" />
          <meta name="application-name" content="Notion Social" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-config"
            content={'/assets/browserconfig.xml'}
          />
          <meta name="theme-color" content="#ffffff" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
