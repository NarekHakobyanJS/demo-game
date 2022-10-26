import React from 'react';
import "./gamecover.css";

function GameCover({image = ""}) {

  return (
    <div className='game-cover' style={{backgroundImage: `url(${image})`}}/>
  )
}

export default GameCover