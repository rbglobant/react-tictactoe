import React, { useState } from 'react';

const GameContainer = () => {

    function renderCell(i) {
        return (
          <button className="game-container_board-cell">
            {i}
          </button>
        );
      }

    return ( 
        <div className="game-container">
            <div className="game-container_board">
                <div className="game-container_board-row">
                    {renderCell(0)}
                    {renderCell(1)}
                    {renderCell(2)}
                </div>
                <div className="game-container_board-row">
                    {renderCell(3)}
                    {renderCell(4)}
                    {renderCell(5)}
                </div>
                <div className="game-container_board-row">
                    {renderCell(6)}
                    {renderCell(7)}
                    {renderCell(8)}
                </div>
            </div>
        </div>
     );
}
 
export default GameContainer;