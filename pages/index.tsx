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

      {/* Body */}
      <main className={styles.wrapper}>

        {/* Hero */}
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Insert title here...</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Welcome to Project:NOTES, a minimalist note-taking site that also aims to improve your focus and study habits in more ways than one.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link href="/login"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Log in</button></Link>
              <Link href="/signup"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Sign up</button></Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container px-4 py-5" id="featured-3">
          <h2 className="pb-2 border-bottom">Columns with icons</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em"><use href="#collection"></use></svg>
              </div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We will add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="icon-link d-inline-flex align-items-center">
                Call to action
                <svg className="bi" width="1em" height="1em"><use href="#chevron-right"></use></svg>
              </a>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em"><use href="#people-circle"></use></svg>
              </div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We will add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="icon-link d-inline-flex align-items-center">
                Call to action
                <svg className="bi" width="1em" height="1em"><use href="#chevron-right"></use></svg>
              </a>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
              </div>
              <h3 className="fs-2">Featured title</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We will add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="icon-link d-inline-flex align-items-center">
                Call to action
                <svg className="bi" width="1em" height="1em"><use href="#chevron-right"></use></svg>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p className="text-center text-muted">© 2022 Company, Inc</p>
          </footer>
        </div>
      </footer>
    </>
  )
}
