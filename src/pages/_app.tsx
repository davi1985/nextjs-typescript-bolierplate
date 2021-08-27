import { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <meta
          name="description"
          content="A simple project starter to work with Typscript, ReactJS, NextJS and Styled Component"
        />
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
