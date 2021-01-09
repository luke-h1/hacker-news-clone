import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/icon-512.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
