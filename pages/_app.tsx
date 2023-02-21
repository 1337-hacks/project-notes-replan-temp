import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/styles.css'
import Navbar from '../components/Navbar'
import { AuthContextProvider } from "../context/AuthContext";
import 'react-quill/dist/quill.snow.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <AuthContextProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthContextProvider>
  </>
  )
}
