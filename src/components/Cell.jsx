const Cell = ({ value, onClick }) => {
    return ( 
        <button className="game-container_board-cell" onClick={onClick}>
            {value}
        </button> );
}
 
export default Cell;