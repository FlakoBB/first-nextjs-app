// ? Los archivos error.js/jsx sirven para renderizar un componente en caso de que falle el componente principal
'use client'

export const Error = () => {
  return (
    <p style={ { backgroundColor: 'red', color: 'white' } }>Error al cargar los comentarios</p>
  )
}

export default Error
