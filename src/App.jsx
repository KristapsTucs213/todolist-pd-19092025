import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTask] = useState(null)

  async function clicker(event){
    event.preventDefault()
    const forma = document.getElementById("formm");
    const formData = new FormData(forma);
    const vertiba = formData.get("input");
    setTask((tasks) => tasks = vertiba);
  }
  

  return (
    <>
    <h1>TO DO LIST</h1>
    <form id='formm'>
      <input type="text" name="input" id="input" />
    </form>
      <button onClick={clicker}>
        Ievadi savu tasku
      </button>
      <p>Tavs uzdevums ir {tasks} </p>
    </>
  )
}

export default App
