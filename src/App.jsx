import { useState } from 'react'
import './styles.css'

export default function App() {
  // Set an empty value in the input / connect with value={newItem} and onChange={(e) => setNewItem(e.target.value)}
  const [newItem, setNewItem] = useState('')

  // Set the value todos in the array / connect with onSubmit={handleSubmit}
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    // function with argument to modify the next value
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
    // set up the input value to empty after validation
    setNewItem('')
    // set the todos with the method map in the ul to display it
    console.log(todos)
  }

  function toggleTodo(id, completed) {
    // We are going to use our current todos
    setTodos((currentTodos) => {
      // each one of our todo we want to checked if it's the one that I'm currently tried to toggle
      return currentTodos.map((todo) => {
        // if the todo.id is the same of the current id then
        if (todo.id === id) {
          return { ...todo, completed }
        }
        // If it's false then return with no change at all
        return todo
      })
    })
  }
// Delete Todo 
  function deleteTodo (id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row ">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
