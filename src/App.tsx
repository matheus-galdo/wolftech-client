import { useState } from 'react'
import Home from './pages/Home'
import Header from './patterns/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
