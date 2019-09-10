import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="referrer" content="no-referrer" />
          <link rel="stylesheet" href="/static/index.css" type="text/css" />
          <link rel="stylesheet" href="/static/hljs.css" type="text/css" />
          <link rel="stylesheet" href="/static/reset.css" type="text/css" />
          <title>ssh的前端博客</title>
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
