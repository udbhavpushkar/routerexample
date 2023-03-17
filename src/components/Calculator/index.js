import React, { useState } from "react"

const Calculator = () => {
  const [num, setNum] = useState(3)

  const handleSquare = () => {
    debugger
    let x = num
    x = x + 4
    setNum(x * x)
    console.log(num)
  }

  return (
    <div>
      <button onClick={handleSquare}>Square</button>
      <h2>{num}</h2>
    </div>
  )
}

export default Calculator
