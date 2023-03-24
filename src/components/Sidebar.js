import React from "react"
import { useSelector } from "react-redux"

const Sidebar = () => {
  const wishlistData = useSelector((state) => state.wishlist)
  return (
    <div className="sidebar">
      <h2>Wishlist</h2>
      {wishlistData.map((data) => (
        <h3 key={data}>{data}</h3>
      ))}
    </div>
  )
}

export default Sidebar
