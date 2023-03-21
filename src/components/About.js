import { useEffect, useState } from "react"

const About = () => {
  const [counter, setCounter] = useState(5)
  const [test, setTest] = useState(10)
  const [time, setTime] = useState(0)

  // useEffect(() => {
  //will be called on every re render
  // console.log("Hey see this is on every re -render")
  // }) //because no dependency array

  // useEffect(() => {
  //   //will be called on first render
  //   console.log("On first render only")
  // }, []) //because empty depnendency array

  // useEffect(() => {
  //   //will be called when dependency gets updated
  //   console.log("test is updated")
  // }, [test]) //"test" is dependency

  // useEffect(() => {
  //   return () => {
  //     //this is cleanup function
  //   }
  // }, [])

  return (
    <div>
      About
      <h1>Number : {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Click
      </button>
      <h1>test : {test}</h1>
      <button
        onClick={() => {
          setTest(test + 1)
        }}
      >
        Click test
      </button>
      <h2>Time : {time}</h2>
    </div>
  )
}

export default About
