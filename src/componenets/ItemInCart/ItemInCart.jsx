import React from 'react'
import "../../index.css"

function ItemInCart({qo = 0}) {
  return(
    <div className='qo'>
        {qo}
    </div>
  )
}

export default ItemInCart