// ? Las carpetas nombradas entre parentesis sirven para definir un grupo de rutas que pueden compartir un layout sin ser rutas anidadas

const LayoutCompartido = ({ children }) => {
  return (
    <div>
      <div style={ { backgroundColor: 'antiquewhite', color: 'dodgerblue' } }>
        <marquee>
          <p>Grupo que comparte layout sin ser rutas anidadas (about | contact)</p>
        </marquee>
      </div>
      { children }
    </div>
  )
}

export default LayoutCompartido
