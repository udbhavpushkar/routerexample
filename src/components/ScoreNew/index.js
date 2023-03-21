import { useState, useMemo } from "react"

const ScoreNew = () => {
  const [rcb, setRcb] = useState(0)
  const [mi, setMi] = useState(0)

  const squaredNumber = useMemo(() => {
    slowSquare(mi)
  }, [mi])
  //useMemo memoized the value returned from the function
  // React.memo => memozied the component
  // useMemo => memoized the value returned by the function
  // useCallback => it will memoized the function

  function rcbScore() {
    setRcb((prev) => prev + 1)
  }

  function miScore() {
    setMi((prev) => prev + 1)
  }

  function slowSquare(x) {
    for (let index = 0; index < 1000000000; index++) {} // to make function slow
    return x * x
  }

  console.log("Rendering this ScoreNew component")

  return (
    <div>
      <div>
        <button onClick={rcbScore}>Rcb</button>
        <button onClick={miScore}>Mi</button>
      </div>
      <h2>RCB : {rcb}</h2>
      <h2>MI : {mi}</h2>
      <h3>Sq number : {squaredNumber}</h3>
    </div>
  )
}

export default ScoreNew
