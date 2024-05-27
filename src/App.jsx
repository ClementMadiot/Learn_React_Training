import { useState } from 'react'
import './styles.css'
import NewTodoForms from './NewTodoForms'
import TodoList from './TodoList'

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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
