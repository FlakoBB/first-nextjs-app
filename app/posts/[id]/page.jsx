import React from 'react'

// ? El prop 'params' lo obtiene de la ruta, en este caso sera el id del post a mostrar
const Post = ({ params }) => {
  const { id } = params
  return (
    <div>Este es el post { id }</div>
  )
}

export default Post
