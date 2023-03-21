import React, { useState, useCallback, useEffect } from "react"

const CallbackEx = () => {
  const [ages, setAges] = useState([])
  const [num, setNum] = useState(0)

  console.log("Rerender callback ex")

  //addAges will be re-created on each render
  const addAges = useCallback(() => {
    let x = parseInt(Math.random() * 60)
    setAges((prev) => [...prev, x])
  }, [ages])
  //useCallback will memoize the function (it will re-create the function
  // everytime only when dependency changes)
  // usually we use useCallback in debouncing

  const increase = () => {
    setNum(num + 2)
  }

  return (
    <div>
      <h1>Number is : {num}</h1>
      <button onClick={increase}>Increase</button>
      <StudentList data={ages} addData={addAges} />
    </div>
  )
}

const StudentList = React.memo((props) => {
  console.log("studentList rerendered")

  return (
    <div>
      <h1>Ages list</h1>
      <div>
        {props.data.map((age, index) => (
          <span key={index}>{age}, </span>
        ))}
      </div>
      <button onClick={props.addData}>Add age</button>
    </div>
  )
})

export default CallbackEx
