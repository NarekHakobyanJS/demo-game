import React from 'react';
import "./cartblock.css";
import {IoCartOutline} from "react-icons/io5"
import CartMenu from '../CartMenu/CartMenu';
import {useSelector} from "react-redux";
import {calctotalPrice} from "../utils"
import { useState } from 'react';
import ItemInCart from '../ItemInCart/ItemInCart'

function CartBlock() {
  const [isCartVis, setCartIsVis] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const totalPrice = calctotalPrice(items)
  console.log(items)
  return (
    <div className='cart-block'>
      <ItemInCart qo={items.length}/>
       <IoCartOutline size={25} className="cart-block-icon" onClick={() => setCartIsVis(!isCartVis)}/>
       {totalPrice > 0 ? <span className='cart-total-price'>{totalPrice}</span> : null }
      {isCartVis && <CartMenu items={items}/> }
    </div>
  )
}

export default CartBlock