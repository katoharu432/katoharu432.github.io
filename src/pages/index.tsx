import Head from 'next/head'
import Layout from '../components/layout'
import { SITE_TITLE } from '../lib/constants'

import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className=' leading-loose text-xl '>
        <p className='font-bold'>next ？？？ </p>
        <p>now Dietitian👨🏻‍🍳 at Shopro</p>
        <p className=' whitespace-normal md:whitespace-pre'>ex-WebDeveloper🧑🏻‍💻 &amp; Board Member at <a href='https://innovation-power.jp/'>InnovationPower Co.,Ltd</a></p>
      </section>
      <section className=' leading-loose text-xli p-4'>
        <h2 className=' leading-loose text-2xl mz-4'>Posts</h2>
        <ul className=' list-none m-0 p-0'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='mz-5' key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className=' text-gray-500'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
