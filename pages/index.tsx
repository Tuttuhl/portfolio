import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { Oswald } from '@next/font/google'
import { useState } from 'react'

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

const oswald = Oswald({ subsets: ['latin'] })

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

export default function Home() {
  const [isVisible, setVisibility] = useState(false)
  return (
    <>
      <Head>
        <title>Easton Tuttle | Dev Portfolio</title>
        <meta name='description' content='Web development portfolio for Easton Tuttle.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.main}>
        <div id='about' className={ isVisible ? `${styles.container}` : `${styles.hidden}` }>
          <h1 className={`${oswald.className} ${styles.heading}`}>hello, i&apos;m easton!</h1>
          <p className={`${oswald.className} ${styles.paragraph}`}>software developer</p>
        </div>
        <div id='jobs' className={`${oswald.className} ${styles.cards}`}>
          {jobs.map((job: job) => (
            <Card key={job.name} name={job.name} title={job.title} description={job.description} link={job.link} />
          ))}
        </div>
      </main>
    </>
  )
}
