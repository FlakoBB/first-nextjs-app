import '../styles/globals.css'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'Mi Primera app con Next.js',
  description: 'Mi Primera App con Next.js siguiendo el curso de Midudev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        { children }
      </body>
    </html>
  )
}
