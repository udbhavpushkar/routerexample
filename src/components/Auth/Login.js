import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    let temp = { ...data }
    temp[e.target.name] = e.target.value
    setData(temp)
  }

  useEffect(() => {
    //if we dont have auth_token in localStorage, then redirect to /profile
    if (localStorage.getItem("auth_token")) {
      navigate("/profile")
    }
  }, [navigate])

  const handleLogin = async (e) => {
    // to stop refresh on submit
    e.preventDefault()

    //calling login api and if successful get response
    let response = await axios.post("https://dummyjson.com/auth/login", data)

    //store token from response.data in localStorage
    localStorage.setItem("auth_token", response.data.token)

    //redirect to profile
    navigate("/profile")
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input type="text" name="username" onChange={handleInputChange} placeholder="Email" />
        </div>
        <div>
          <input type="password" name="password" onChange={handleInputChange} placeholder="Passsword" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
