import HeadSEO from 'Components/Container/HeadSEO'
import DefaultLayout from 'Components/Layout/DefaultLayout'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <HeadSEO />
      </Head>
      <body>
        <DefaultLayout >
          <Main />
          <NextScript />
        </DefaultLayout>
      </body>
    </Html>
  )
}