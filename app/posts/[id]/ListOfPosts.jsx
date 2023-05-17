// ! Este es un React Server Component
// Componente (pagina) que se renderiza een el servidor

import Link from 'next/link'
import LikeButton from './LikeButton'

// Es un componente estatico, es decir, el cliente no puede interactuar con él (Solo lectura)
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60 // * Esto Combierte al componenete en una pagina dinamica que obtiene los datos (fetch) cada 60 segundos (en este caso)
    }
  })
    .then(res => res.json())
}

// * Componente asincrono
const ListOfPosts = async () => {
  const posts = await fetchPosts()
  return (
    <section>
      {
        posts.slice(0, 5).map(post => (
          <article key={ post.id }>
            <Link href='/posts/[id]' as={ `/posts/${post.id}` }>
              <h2 style={{ color: 'greenyellow' }}>{ post.title }</h2>
              <p>{ post.body }</p>
              <LikeButton />
            </Link>
          </article>
        ))
      }
    </section>
  )
}

export default ListOfPosts
