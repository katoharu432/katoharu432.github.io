import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {
  SITE_TITLE,
  AUTHOR_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
} from '../lib/constants'

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400,700&display=swap&subset=japanese"
        />
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="og:title" content={SITE_TITLE} />
        <meta property="og:image" content={`${SITE_URL}/images/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@katoharu432" />
        <meta name="twitter:creator" content="@katoharu432" />
        <meta property="og:site_name" content={SITE_TITLE} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={AUTHOR_NAME}
            />
            <h1 className={utilStyles.heading2Xl}>{AUTHOR_NAME}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={AUTHOR_NAME}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{AUTHOR_NAME}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
