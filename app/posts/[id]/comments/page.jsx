import styles from '../../../../styles/comments.module.css'

import { jostFont } from '@/app/fonts'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 4000)) // * Simulamoss un retraso de 4 segundos en la carga de lso comentarios
  // throw new Error('EERRROOR') // * Simulacion de error al cargar los datos

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}
// ? El prop 'params' lo obtiene de la ruta, en este caso sera el id del post a mostrar
const Comments = async ({ params }) => {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <section className={`${jostFont.variable}`} style={ { backgroundColor: '#666', padding: '1rem 2.5rem' } }>
      <ul className='lista'>
        {
          comments.map(comment => (
            <li key={ comment.id }>
              <h2 className={styles.email}>{ comment.email }</h2>
              <p>{ comment.body }</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Comments
