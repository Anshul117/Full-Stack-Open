import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Hello = (props) =>{
  console.log(props)
  return (<div>
    <p>Hello {props.name}, you are {props.age} year  old</p>
  </div>)
}
function App() {
  const [count, setCount] = useState(0)
  console.log('Hello from component')
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now,a+b)
  const name = 'Yash'
  const age= 10
  return (
    <>
      <div>
        <div><h1>Greetings</h1>
        <Hello name = 'Anshul' age = {26+10} />
        <Hello name = {name}  age = {age}/>
        </div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
