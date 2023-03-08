import { ReactElement } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'
import { Oswald } from '@next/font/google'

const oswald = Oswald({ subsets: ['latin'] })

export default function Header (): ReactElement {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='#about' className={`${styles.link} ${oswald.className}`}>
          About
        </Link>
        <Link href='#projects' className={`${styles.link} ${oswald.className}`}>
          Projects
        </Link>
        <Link href='#career' className={`${styles.link} ${oswald.className}`}>
          Career
        </Link>
        <Link href='#contact' className={`${styles.link} ${oswald.className}`}>
          Contact
        </Link>
      </nav>
    </header>
  )
}
