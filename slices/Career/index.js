import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.CareerSlice} CareerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CareerSlice>} CareerProps
 * @param { CareerProps }
 */
const Career = ({ slice }) => {
  return (
    <>
    <h1 className='text-center font-bold text-9xl'>career</h1>
      {slice.items.map(item => {
        return (
          <div key={item.company_name + item.timeline}>
            <h1 className='text-center m-0 text-5xl'>{item.company_name}</h1>
            <h2 className='text-center m-0 text-2xl'>{item.job_title}</h2>
            <h3 className='text-center'>{item.timeline}</h3>
            <PrismicRichText field={item.job_description} components={{
              paragraph: ({ children }) => <p className='text-center'>{children}</p>
            }} />
          </div>
        )
      })}
    </>
  )
}

export default Career
