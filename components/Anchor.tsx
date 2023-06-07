import { ReactElement } from 'react'
import Link from 'next/link'

interface AnchorProps {
  href: string
  label: string
}

export default function Anchor ({ href, label }: AnchorProps): ReactElement {
  return (
    <>
      <Link href={href} className='hover:text-white'>
        {label}
      </Link>
    </>
  )
}