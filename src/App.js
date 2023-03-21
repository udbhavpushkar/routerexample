import "./App.css"
import React, { Suspense } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import Login from "./components/Auth/Login"
import Policy from "./components/Auth/Policy"
import Profile from "./components/Auth/Profile"
import Calculator from "./components/Calculator"
import Score from "./components/Score"
import ScoreNew from "./components/ScoreNew"
import CallbackEx from "./components/CallbackEx"
import Schedule from "./components/Schedule"
import About from "./components/About"
import Todo from "./components/Todo"
// const Policy = React.lazy(() => import("./components/Auth/Policy"))
const Login = React.lazy(() => import("./components/Auth/Login"))

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <CallbackEx /> */}
        {/* <Schedule /> */}
        {/* <About /> */}
        <Todo />
        {/* <Calculator vivek={"Newton"} /> */}
        {/* <Score /> */}
        {/* <ScoreNew /> */}
        {/* <div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/policy">Policy</Link>
          </div>
        </div> */}

        {/* <Suspense fallback={<div>loading....</div>}>
          <Policy />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/policy" element={<Policy />} />
          </Routes>
        </Suspense> */}

        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes> */}

        {/* <Switch>
          <Route exact path="/user">
            <UserList/>
          </Route>
          <Route path="/user/create">
            <UserCreate/>
          </Route>
          
        </Switch> */}
      </div>
    </BrowserRouter>
  )
}

export default App
