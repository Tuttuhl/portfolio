import { ReactElement } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header (): ReactElement {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href='#about' className={styles.link}>
          About
        </Link>
        <Link href='#projects' className={styles.link}>
          Projects
        </Link>
        <Link href='#career' className={styles.link}>
          Career
        </Link>
        <Link href='#contact' className={styles.link}>
          Contact
        </Link>
      </nav>
    </header>
  )
}
