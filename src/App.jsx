import React, { useCallback, useState } from 'react'
import Child from './components/Child'
const App = () => {

  const [count, setCount] = useState(0);
  // console.log('count');
  const handleCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, [])

  return (
    <>

      <h1>Count {count}</h1>
      <button onClick={handleCount}>Increament</button >
      <Child title="Click me" handleCount={handleCount} />
    </>
  )
}

export default App