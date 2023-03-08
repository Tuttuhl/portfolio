import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { GetStaticProps } from 'next'
import { CreateClientConfig } from '@prismicio/next'
import { createClient } from '../prismicio'
import { PrismicDocument } from '@prismicio/types'
import { PrismicRichText } from '@prismicio/react'

interface project {
  name: string
  description: string
  link: string
}

interface job {
  name: string
  title: string
  description: string
  link: string
}

const projects = [
  {
    name: 'ABT',
    description: 'AB&T Website overhaul',
    link: 'https://www.abtbank.com'
  },
  {
    name: 'ilovelakemac',
    description: 'site overhaul',
    link: 'https://www.ilovelakemac.com'
  }
]

const jobs = [
  {
    name: 'Adams Bank & Trust',
    title: 'System Admin Technician',
    description:
      'Developing custom internal web forms and their document routing solutions using HTML, CSS, JavaScript, and Director Workflow.',
    link: 'https://www.abtbank.com'
  },
  {
    name: 'RCS',
    title: 'Development Intern',
    description: 'Implemented solutions for bugs and features within the Zetta product utilizing C# and .NET Core.',
    link: 'https://www.rcsworks.com'
  },
  {
    name: 'Handel Information Technologies',
    title: 'Customer Solutions Engineer',
    description: 'Implemented data conversions and system integrations with raw SQL queries.',
    link: 'https://www.handelit.com'
  }
]

interface prismicProps {
  page: PrismicDocument<Record<string, any>, string, string>
}

export default function Home ({ page }: prismicProps) {
  console.log(page)
  return (
    <>
      <Head>
        <title>{page.data.title}</title>
        <meta name='description' content={page.data.description} />
        <meta name='keywords' content={page.data.keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.main}>
        <div id='about' className={styles.container}>
          <h1 className={styles.heading}>{page.data.welcome}</h1>
          <h2 className={styles.subheading}>{page.data.job_title}</h2>
          <PrismicRichText field={page.data.autobiography} />
        </div>
        <div id='career' className={styles.container}>
          {jobs.map((job: job) => (
            <Card key={job.name} name={job.name} title={job.title} description={job.description} link={job.link} />
          ))}
        </div>
      </main>
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
