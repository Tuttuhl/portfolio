import Head from 'next/head'
import Header from '../components/Header'
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
      <div id='about' className='h-screen flex flex-col justify-center align-center transition-opacity'>
        <h1 className='text-6xl lg:text-9xl text-center font-bold'>{page.data.welcome}</h1>
        <h2 className='text-3xl lg:text-6xl text-center mt-5'>{page.data.job_title}</h2>
        <PrismicRichText field={page.data.autobiography} components={{
          paragraph: ({ children }) => <p className='text-2xl lg:text4xl text-center mt-5'>{children}</p>
        }} />
      </div>
      <div id='career'>
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
