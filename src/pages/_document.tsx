import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
          <body className=' overflow-hidden ounded-full h-screen w-screen bg-no-repeat bg-gradient-radial from-vingateBlue to-midnigth"'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
