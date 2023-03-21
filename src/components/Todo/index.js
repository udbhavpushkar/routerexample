import React, { useEffect, useState } from "react"

const Todo = () => {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchAllTodos()
  }, [])

  const fetchAllTodos = () => {
    //fetches all data
  }

  const addTodoHandler = () => {
    //grab value from input
    // push that value in todos
    let data = [...todos]
    data.push(text)
    setTodos(data)
    //clear input field
    setText("")
  }

  const deleteTodoHandler = (index) => {
    //delete the index
    let data = [...todos]
    data.splice(index, 1)
    setTodos(data)
  }

  const updateTodoHandler = (index) => {
    //put text in input field, change button name to udpate
    let data = [...todos]
    data.splice(index, 1, "daskhdjksahdaks")
    setTodos(data)
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <button onClick={addTodoHandler}>Submit</button>

        <div>
          <h3>List</h3>
          <div>
            {todos.map((t, index) => (
              <div>
                {index + 1}. {t} &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                <span
                  onClick={() => {
                    deleteTodoHandler(index)
                  }}
                  style={{ color: "red" }}
                >
                  Delete
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
