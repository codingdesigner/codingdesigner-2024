import './global.css'
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
      <body>
        <ul aria-role="menu" className={styles.menu}>
          <li><a href="/">The Coding Designer</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/cv">CV</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/test/md">Markdown</a></li>
          <li><a href="/test">Settings</a></li>
        </ul>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
