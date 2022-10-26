import React from 'react';
import Button from '../Button/Button';
import "./gamebuy.css";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart} from "../../redux/cart/reducer"

function GameBuy({game}) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === game.id)

  const handleClick = (e) => {
    e.stopPropagation();
    if(isItemInCart){
      dispatch(deleteItemFromCart(game.id))
    }else{
      dispatch(setItemInCart(game))
    }

  }
  return (
    <div className='game-buy'>
        <span className='game-buy-price'>{game.price} $</span>
        <Button onClick={handleClick}>
            {isItemInCart ? "delete" : "cart"}
        </Button>
    </div>
  )
}

export default GameBuy