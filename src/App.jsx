import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  function addTodo(){
    setTodos([...todos, todo])
    setTodo('');
  }

  function removeTodo(item){
    setTodos(todos.filter(t => t !== item))
  }

  function handleChange(e){
    console.log(e.target.value);
    setTodo(e.target.value)
  }

  return (
    <>
      <input type="text" value={todo} onChange={handleChange}/>
      <button onClick={addTodo}>Add</button>
      <div className="App">
        <h1>Todo List</h1>
        <ul className="todo-list">
           {todos.map(i => <li onClick={() => removeTodo(i)}>{i}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
