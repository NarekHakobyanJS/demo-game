import React from 'react';
import { calctotalPrice } from '../utils';
import Button from "../Button/Button"
import "./cartmenu.css";

function CartMenu({items, onClick}) {
  return (
    <div className='cat-menu'>
        <div className='cart-menu-list'>
            {
              items.length > 0 ? items.map(game => game.title) : null
            }
        </div>
        {
            items.length > 0 ? <div className='cart-menu-arr'>
                <div className='cart-menu-totalPrice'>
                    <span>itog</span>
                    <span> {calctotalPrice(items)}dram </span>
                </div>
                <Button>
                    sdelat zakaz
                </Button>
            </div> : null
        }
    </div>
  )
}

export default CartMenu