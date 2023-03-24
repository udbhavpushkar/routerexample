import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ADD, ADD_TO_WISHLIST, REMOVE } from "./actions"

const Item = (props) => {
  const dispatch = useDispatch() //dispatch action

  const [isAdded, setIsAdded] = useState(false)

  const handleButtonClick = () => {
    if (isAdded) {
      dispatch({ type: REMOVE })
      setIsAdded(false)
    } else {
      dispatch({ type: ADD })
      setIsAdded(true)
    }
  }

  const handleWishlistClick = () => {
    dispatch({ type: ADD_TO_WISHLIST, data: props.data })
  }

  return (
    <div className="item">
      Item
      <h4>{props.data}</h4>
      <button onClick={handleButtonClick}>{isAdded ? "Remove from cart" : "Add to Cart"}</button>
      <button onClick={handleWishlistClick}>Add to Wishlist</button>
    </div>
  )
}

export default Item
