import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form/Form';
import Section from './components/section/Section';

function App() {
  // anything prefixed with use* is a hook
  
  const [counterHistory, setCounterHistory] = useState<any[]>([]);

  const handleRemoveHistory = (index: number) => {
    setCounterHistory(prevHistory => prevHistory.filter((_, i) => i !== index
    ))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Form counterHistory = {counterHistory} setCounterHistory={setCounterHistory}  />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <Section counterHistory={counterHistory} 
        handleRemoveHistory={handleRemoveHistory}
        />
          
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App