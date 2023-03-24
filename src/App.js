import "./App.css"
import React from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flexbox">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App
