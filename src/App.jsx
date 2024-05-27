import { useState } from 'react'
import './styles.css'
import NewTodoForms from './NewTodoForms'

export default function App() {
  // Set the value todos in the array / connect with onSubmit={handleSubmit}
  const [todos, setTodos] = useState([])

  // function with argument to modify the next value
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  //; Check Todo
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
  //; Delete Todo
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }
  return (
    <>
      <NewTodoForms onSubmit={addTodo}/>
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        {/* if todos is false then display "No Todos"  */}
        {todos.length === 0 && 'No Todos'}
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
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
