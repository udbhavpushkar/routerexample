import React, { useState, useCallback, useEffect } from "react"

const Schedule = () => {
  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  function increase() {
    //State sometimes does not updates instantly, state change gets scheduled.
    //Sometimes, set updation are batched
    //in case of multiple state updation, all are club together to create a single async process
    setNum(num + 2)
    setNum1(num1 + 2)
    setNum2(num2 + 2)
  }

  console.log("re-rendering")
  console.log("our comp")

  return (
    <div>
      <h1>Number is : {num}</h1>
      <h1>Number2 is : {num1}</h1>
      <h1>Number3 is : {num2}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Schedule
