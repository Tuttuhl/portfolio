import React from 'react'
import styles from '../styles/Career.module.css'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CareerSlice} CareerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerSlice>} CareerProps
 * @param { CareerProps }
 */
const Career = ({ slice }) => {
  return (
    <>
      {slice.items.map(item => {
        return (
          <div key={item.company_name} className={styles.card}>
            <h1 className={styles.heading}>{item.company_name}</h1>
            <h2 className={styles.subheading}>{item.job_title}</h2>
            <h3 className={styles.timeline}>{item.timeline}</h3>
            <PrismicRichText field={item.job_description} components={{
              paragraph: ({ children }) => <p className={styles.text}>{children}</p>
            }} />
          </div>
        )
      })}
    </>
  )
}

export default Career
