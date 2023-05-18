'use client' // * Indica que este componente necesita ser renderizado por el cliente

import { useState } from 'react'

export const LikeButton = () => {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={ () => setLiked(!liked) }>
      { liked ? 'Liked' : 'Like' }
    </button>
  )
}

export default LikeButton
