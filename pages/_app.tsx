import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Oswald } from '@next/font/google'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

const oswald = Oswald({ subsets: ['latin'] })

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <main className={oswald.className}>
          <Component {...pageProps} />
        </main>
      </PrismicPreview>
    </PrismicProvider>
  )
}
