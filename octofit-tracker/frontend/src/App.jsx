import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>OctoFit Tracker</h1>
      <p>Track your fitness goals with GitHub Copilot Agent Mode</p>
    </div>
  )
}

export default App
