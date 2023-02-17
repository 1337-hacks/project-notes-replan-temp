import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/styles.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Project:NOTES</title>
        <meta name="description" content="Made by Elijah N." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.wrapper}>
        {/* Body */}
        <div className="container text-center h-100">
          <div className="row">
            <div>Welcome to Project:NOTES.</div>
            <div>Click here to start. <Link href="/workspace">Start</Link></div>
          </div>   
        </div>

        {/* Footer */}

        <></>
      </main>
    </>
  )
}
