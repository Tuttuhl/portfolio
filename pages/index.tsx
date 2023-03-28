import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { components } from '../slices'
import { GetStaticProps } from 'next'
import { CreateClientConfig } from '@prismicio/next'
import { createClient } from '../prismicio'
import { PrismicDocument } from '@prismicio/types'
import { PrismicRichText, SliceZone } from '@prismicio/react'

interface prismicProps {
  page: PrismicDocument<Record<string, any>, string, string>
}

export default function Home ({ page }: prismicProps) {
  return (
    <>
      <Head>
        <title>{page.data.title}</title>
        <meta name='description' content={page.data.description} />
        <meta name='keywords' content={page.data.keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div id='about' className={styles.container}>
        <h1 className={styles.heading}>{page.data.welcome}</h1>
        <h2 className={styles.subheading}>{page.data.job_title}</h2>
        <PrismicRichText field={page.data.autobiography} />
      </div>
      <div id='career' className={styles.cardWrapper}>
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }: CreateClientConfig) => {
  const client = createClient({ previewData })
  const page = await client.getSingle('home').catch((error) => {
    console.log(error)
    return null
  })

  return {
    props: {
      page
    }
  }
}
