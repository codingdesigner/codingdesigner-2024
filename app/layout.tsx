import { Header } from './components/header'
import { PageFooter } from './components/pageFooter'
import './global/global-variables.css'
import './global/global-base.css'
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hqw2ypd.css"></link>
      </head>
      <body className="body">
        <div className={styles.holyGrail}>
          <Header />
          <main id="maincontent" className={styles.holyGrailBody}>
            <div className={styles.holyGrailContent}>
              {children}
            </div>
          </main>
          <PageFooter />
        </div>
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://thecodingdesigner.com/'),
  title: {
    template: '%s | Gwendy Wendell, The Coding Designer',
    default: 'Gwendy Wendell, The Coding Designer'
  },
  openGraph: {
    title: 'Gwendy Wendell, The Coding Designer',
    description: 'The web design system portfolio of Gwen Wendell',
    url: 'https://thecodingdesigner.com/',
    siteName: 'Gwendy Wendell, The Coding Designer',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
