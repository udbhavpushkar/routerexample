import React from "react"
import Item from "./Item"

const Main = () => {
  const items = ["Iphone", "Bat", "Laptop", "Shoes", "Car"]
  return (
    <div style={{ display: "flex" }}>
      {items.map((data, index) => {
        return <Item data={data} key={index} />
      })}
    </div>
  )
}

export default Main
