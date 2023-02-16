import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link href='/assets/Cowhead-White.png' type='image/png' rel='shortcut icon' />
      <title>Team 1538 Calculators</title>
    </Head>

    <Header />
    <Component {...pageProps} />
  </>
}
