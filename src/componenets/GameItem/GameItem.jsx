import React from 'react';
import "./gameitem.css";
import GameCover from '../GameCover/GameCover';
import GameBuy from '../GameBuy/GameBuy';
import GameGenre from '../GameGenre/GameGenre';

function GameItem({game}) {
  return (
    <div className='game-item'>
        <GameCover image={game.image}/>
        <div className='game-details'>
            <span className='game-title'>{game.title}</span>
            <div className='game-genres'>
                {
                    game.genres.map(genre => <GameGenre genre={genre}/>)
                }
            </div>
            <div className='game-item-buy'>
                <GameBuy game={game}/>
            </div>
        </div>
    </div>
  )
}

export default GameItem