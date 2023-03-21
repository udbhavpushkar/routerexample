import { useState } from "react"
import MiScore from "./mi"

const Score = () => {
  const [rcb, setRcb] = useState(0)
  const [mi, setMi] = useState(0)

  function rcbScore() {
    let x = parseInt(Math.ceil(Math.random() * 6))
    setRcb((prev) => prev + x)
  }

  function miScore() {
    let x = parseInt(Math.ceil(Math.random() * 6))
    setMi((prev) => prev + x)
  }

  console.log("Rendering this Score component")

  return (
    <div>
      <h1>Score</h1>

      <div>
        <button onClick={rcbScore}>RCB</button>
      </div>
      <div>
        <button onClick={miScore}>MI</button>
      </div>

      <h2>RCB : {rcb}</h2>
      {/* <h2>MI: {mi}</h2> */}
      <MiScore data={mi} />
    </div>
  )
}

export default Score
