import React from "react";
import { useState } from "react";


function Item({ name, category }) {
  const[cart,setToCart]=useState(false)

  const addCart= ()=>{
    cart? setToCart(false):setToCart(true)
  }

   let value = cart ? "in-cart": ""
   var text = cart ? "Remove from Cart" :"Add to Cart"
   
  return (
    <li className={value}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{text}</button>
    </li>
  );
}

export default Item;
