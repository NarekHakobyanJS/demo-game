import React from 'react';
import "./button.css";

function Button({
    onClick,
    type,
    children,
    size = "s"
}) {
  return (
    <button className='btn' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button