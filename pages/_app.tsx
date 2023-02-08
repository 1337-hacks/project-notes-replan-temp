import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Header />
    <Component {...pageProps} />
  </>
  )
}
