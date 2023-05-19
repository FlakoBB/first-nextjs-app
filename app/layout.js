import '../styles/globals.css'
import Navigation from '../components/Navigation'

// * Las funtes pueden importarse direct5amente en el componente que la va a utilizar, en un archivo independiente que a su vez exporte cada fuente o como variables para usarla en los archivos de css
import { rubikWetPaintFont } from './fonts'
// ? Importacion de funtes de Google
// import { Rubik_Wet_Paint as rubikWetPaint } from 'next/font/google'
// ? Configuracion de la funte importada
// const rubikWetPaintFont = rubikWetPaint({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap'
// })

export const metadata = {
  title: 'Mi Primera app con Next.js',
  description: 'Mi Primera App con Next.js siguiendo el curso de Midudev'
}

export default function RootLayout({ children }) {
  return (
    <html className={rubikWetPaintFont.className} lang="en">
      <body>
        <Navigation />
        { children }
      </body>
    </html>
  )
}
