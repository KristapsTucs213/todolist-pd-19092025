import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTask] = useState(null)

  async function clicker(event){
    event.preventDefault()
    const forma = document.getElementById("formm");
    const lists = document.getElementById("lists");
    const formData = new FormData(forma);
    const vertiba = formData.get("input");

    const l1 = document.createElement("li");
    lists.appendChild(l1);
    const info = document.createTextNode(tasks);
    l1.appendChild(info);
    setTask((tasks) => tasks = vertiba);
    const delbutton = document.createElement("button");
    const delinfo = document.createTextNode("X");
    delbutton.appendChild(delinfo);
    l1.appendChild(delbutton);

    delbutton.addEventListener("click", deleterere);

    async function deleterere(){
      l1.remove();
    }

  
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
      <ul id='lists'></ul>
    </>
  )
}

export default App
