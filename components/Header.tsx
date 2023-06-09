import { ReactElement } from 'react'
import Anchor from './Anchor'

export default function Header (): ReactElement {
  return (
    <header>
      <nav className='flex flex-row justify-center p-4 gap-4 md:justify-end'>
        <Anchor href='#about' label='About' />
        {/* <Anchor href='#projects' label='Projects' /> */}
        <Anchor href='#career' label='Career' />
        {/* <Anchor href='#contact' label='Contact' /> */}
      </nav>
    </header>
  )
}
