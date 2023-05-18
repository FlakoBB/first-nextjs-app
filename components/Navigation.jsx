import Link from 'next/link'
import styles from '../styles/navigation.module.css'
import React from 'react'

const links = [
  {
    label: 'HOME',
    route: '/'
  },
  {
    label: 'ABOUT',
    route: '/about'
  },
  {
    label: 'POSTS',
    route: '/posts'
  },
  {
    label: 'CONTACT',
    route: '/contact'
  }
]

const Navigation = () => {
  return (
    <header className={ styles.header }>
      <ul className={ styles.navigation }>
        {
          links.map(({ label, route }) => (
            <li key={ route }>
              <Link href={ route }>
                { label }
              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  )
}

export default Navigation
