import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Profile = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    //remove auth_token from local storage
    localStorage.removeItem("auth_token")

    //redirect to /login
    navigate("/login")
  }

  useEffect(() => {
    if (!localStorage.getItem("auth_token")) {
      navigate("/login")
    }
  }, [])

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
