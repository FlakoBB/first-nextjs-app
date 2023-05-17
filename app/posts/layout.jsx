// * El Estado de los layout se mantiene siempre que se este mostrando

import Counter from './Counter'

export const PostsLayout = ({ children }) => {
  return (
    <div>
      <Counter />
      {children}
    </div>
  )
}

export default PostsLayout
