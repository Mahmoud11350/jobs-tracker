import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body
        style={{
          backgroundColor: '#f0f4f8',
          fontFamily: "'Work Sans', sans-serif",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
