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
        <PageFooter/>
        </div>
      </body>
    </html>
  )
}
