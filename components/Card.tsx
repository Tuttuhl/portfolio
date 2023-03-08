import { ReactElement } from 'react'

interface cardProps {
  name: string
  title: string
  description: string
  link: string
}

export default function Card (props: cardProps): ReactElement {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
    </div>
  )
}
