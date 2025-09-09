import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])
  function Settodo(e) {
    e.preventDefault();
    if (input.trim() === "") return
    setTodoList([...todoList, { text: input, completed: false }])
    setInput("")
    return
  }
  function removetodo(todoremove) {
    const newList = todoList.filter((_, index) => index !== todoremove)
    setTodoList(newList)
  }
  function toogleclass(indexoftodo) {
    let updatedarray = todoList.map((todo, index) => {
      if (index === indexoftodo) {
        return { ...todo, completed: !todo.completed }
      }
      else
        return todo
    })
    setTodoList(updatedarray)
  }
  return (

    <div className='App'>
      <div className="logo">
        <h1>Todo list</h1>
        <button className='total'>Total-Todos({todoList.length})</button>
      </div>
      <form onSubmit={Settodo}>
        <div className='data-holder'>
          <input type="text"
            placeholder='Enter Todo Here'
            value={input} onChange={(e) => setInput(e.target.value)} />
          <button type='submit'>Add</button>
        </div>
        <div className="dataholder">
          <div className='data-view'>
            <ul>
              {todoList.map((todo, index) => (
                <div className='data-view' key={index}>
                  <li >
                    <input type="checkbox" style={{ width: "25px", height: "25px", marginRight: "20px" }} checked={todo.completed} onChange={()=>toogleclass(index)} />
                    <span style={{textDecoration:todo.completed?"line-through":"none",textDecorationColor:todo.completed?"orange":"none"}}> <span style={{color:todo.completed?"red":""}}>{todo.text}</span></span>
                   
                    <button type='button' onClick={() => removetodo(index)}>delete</button>
                  </li>

                </div>
              ))}
            </ul>
          </div></div>
      </form>
    </div>
  )
}

export default App
