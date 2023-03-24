import React from "react"
import { useSelector } from "react-redux"

const Navbar = () => {
  const cartValue = useSelector((state) => state.cart) //subscription
  return (
    <div className="nav ">
      <div>Flipkart</div>
      <div>Cart : {cartValue}</div>
    </div>
  )
}

export default Navbar
