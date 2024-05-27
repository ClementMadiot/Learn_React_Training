import TodoItems from './TodoItems'

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/* if todos is false then display "No Todos"  */}
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => {
        return (
          <TodoItems
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
