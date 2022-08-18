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
          <meta name="title" content="Akbarli Mehin" />
          <meta name="robots" content="noindex" />
          <meta name="description" content="My name is Mehin Akbarli, and I am a multidisciplinary interior designer based in the United States. Born and raised in Baku, Azerbaijan, I was surrounded by a family passionate about architecture and interior design, which inspired me to study architecture at the Azerbaijan Architecture and Construction University." />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
