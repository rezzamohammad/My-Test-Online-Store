import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/public/favicon.ico" />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
          <div hidden id="snipcart" data-api-key="NzZmMDdiNGQtZGFiNy00ZWM2LTgzZDMtMjViNTQ3ZmExMGQ5NjM3NzcyOTgxOTI2NTg2NjI4" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
