import "./App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "./components/Auth/Login"
import Policy from "./components/Auth/Policy"
import Profile from "./components/Auth/Profile"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/policy">Policy</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>

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
