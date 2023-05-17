'use client'

import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contador: { count }</p>
      <button onClick={ () => setCount(count + 1) }>Aumentar Contador</button>
    </div>
  )
}

export default Counter
