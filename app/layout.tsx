import { Header } from './components/header'
import './global/global.css'
import styles from './styles.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Gwendolyn:wght@400;700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" /> */}
      </head>
      <body className={styles.body}>
        <Header prop="yer mom"/>
        <main id="maincontent">
          {children}
        </main>
      </body>
    </html>
  )
}
