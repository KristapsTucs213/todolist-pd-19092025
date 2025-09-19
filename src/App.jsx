import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTask] = useState(null)

  async function clicker(){
    const forma = document.getElementById("formm");
    var formData = new FormData(forma);
    console.log(Object.fromEntries(formData));
  }
  

  return (
    <>
    <h1>TO DO LIST</h1>
    <form id='formm'>
      <input type="text" name="input" id="input" />
      <input type="submit" value="Submit" />
    </form>
      <button onClick={() => setTask((tasks) => tasks = "lol")}>
        your task is {tasks}
      </button>
    </>
  )
}

export default App
