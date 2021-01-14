import Head from 'next/head'

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
    <div className="max-w-xl mx-auto px-4 pt-8 pb-16">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="og:title" content={SITE_TITLE} />
        <meta property="og:image" content={`${SITE_URL}/images/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@katoharu432" />
        <meta name="twitter:creator" content="@katoharu432" />
        <meta property="og:site_name" content={SITE_TITLE} />
      </Head>
      <header className='flex flex-col items-center'>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className='w-32 h-32 rounded-full'
              alt={AUTHOR_NAME}
            />
            <h1 className=' text-4xl leading-relaxed font-bold m-6'>{AUTHOR_NAME}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.png"
                  className='w-24 h-24 rounded-full'
                  alt={AUTHOR_NAME}
                />
              </a>
            </Link>
            <h2 className=' text-2xl m-4'>
              <Link href="/">
                <a className=' text-current'>{AUTHOR_NAME}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className=' m-12 mb-0 ml-0'>
          <Link href="/">
            <a> ← home </a>
          </Link>
        </div>
      )}
    </div>
  )
}
