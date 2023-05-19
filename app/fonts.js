import { Rubik_Wet_Paint as rubikWetPaint, Jost } from 'next/font/google'

export const rubikWetPaintFont = rubikWetPaint({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

// ? Fuente con variable para CSS
export const jostFont = Jost({
  weight: '400',
  subsets: ['latin'],
  variable: '--jost-font',
  display: 'swap'
})
