import React from "react"

const MiScore = (props) => {
  console.log("MiScore is rendering")
  return <h2> Mi : {props.data}</h2>
}

export default React.memo(MiScore)
