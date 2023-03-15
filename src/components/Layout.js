import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Link to="/company?search=newton&city=blr">Company</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
