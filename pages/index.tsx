import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
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

export default function Home () {
  return (
    <>
      <Head>
        <title>Easton Tuttle | Dev Portfolio</title>
        <meta name='description' content='Web development portfolio for Easton Tuttle.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.main}>
        <div id='about' className={styles.container}>
          <h1 className={styles.heading}>hello, i&apos;m easton</h1>
          <h2 className={styles.subheading}>software developer</h2>
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
