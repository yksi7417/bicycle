import { useState } from 'react'
import bicycleLogo from './assets/bicycle.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src={bicycleLogo} className="logo" alt="Bicycle logo" />
        </a>
      </div>
      <h1>Bicycle</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Father and son cycling together
      </p>
    </div>
  )
}

export default App
