import React, { useState, useEffect } from 'react';
import Cell from './Cell'

const GameContainer = () => {
    const [ cells, setCells ] = useState(Array(9).fill(null));
    const [ previousCells, setPreviousCells ] = useState(null);
    const [ isXActive, setIsXActive ] = useState(true);
    const [ winner, setWinner] = useState(null);
    const currentPlayer = isXActive ? "X" : "O";
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    useEffect(() => {
        calculateWinner();
    }, [cells])

    function calculateWinner() {
        for (let i = 0; i < winningLines.length; i++) {
          const [a, b, c] = winningLines[i];
          if (cells[b] && cells[c] && cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            console.log('winner',cells[a]);
            setWinner(cells[a]);
            return
          }
        }
        for (let i = 0; i < cells.length; i++) {
          if (cells[i] == null) {
            return;
          }
        }
        return setWinner('Tie');
      }

    function restartGame() {
      setCells(Array(9).fill(null));
      setPreviousCells(null);
      setIsXActive(true);
      setWinner(null);
    }

    function rewindMove() {
      setCells(previousCells.cells);
      setIsXActive(previousCells.isXActive);
      setPreviousCells(null);
      setWinner(null);
    }

    function renderCell(i) {
        return (
        <Cell
            value={cells[i]}
            onClick={() => {
              console.log(winner);
              if (cells[i] !== null || winner !== null) {
                return;
              }
              const updatedCells= cells.slice();
              updatedCells[i] = currentPlayer;
              setPreviousCells({cells,isXActive});
              setCells(updatedCells);
              setIsXActive(!isXActive);
            }}
          />
        );
      }

    return ( 
        <div className="game-container">
            {winner ? 
              <span className="game-container_status">
                {winner === "Tie" ? `Match result: ${winner}` : `${winner} wins the game!`}
              </span>
              :
              <span className="game-container_status">
                {currentPlayer}'s turn
              </span>
            }
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
            <button id="game-container_restart" onClick={() => {restartGame()}}>Restart</button>
            {previousCells && <button onClick={() => {rewindMove()}}>Undo move</button>}
        </div>
     );
}
 
export default GameContainer;