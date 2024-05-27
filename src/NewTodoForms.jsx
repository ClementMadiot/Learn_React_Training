import { useState } from 'react'

export function NewTodoForms (props) {
  
  // Set an empty value in the input / connect with value={newItem} and onChange={(e) => setNewItem(e.target.value)}
  const [newItem, setNewItem] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    // set up the input value to empty after validation
    if(newItem === "") return

    props.onSubmit(newItem)

    setNewItem('')
    // set the todos with the method map in the ul to display it
    // console.log(todos)
  }
  return (
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
  )
}

export default NewTodoForms;