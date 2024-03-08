import { Header } from './components/header'
import './global/global.css'
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
        <Header />
        <main id="maincontent" className={styles.mainContent}>
          {children}
        </main>
      </body>
    </html>
  )
}
