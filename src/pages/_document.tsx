import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Epilogue:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className="leading-default m-0 bg-white font-sans text-base font-normal text-slate-500 antialiased">
          <Main />
          <NextScript />

          {/* <!-- Messenger Chat plugin Code --> */}
          <div id="fb-root"></div>

          {/* <!-- Your Chat plugin code --> */}
          <div id="fb-customer-chat" className="fb-customerchat"></div>
        </body>
      </Html>
    );
  }
}
