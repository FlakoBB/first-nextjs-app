// * El Estado de los layout se mantiene siempre que se este mostrando

export const PostsLayout = ({ children }) => {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}

export default PostsLayout
