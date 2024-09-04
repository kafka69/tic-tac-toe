import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";
function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gamehistory, setGamehistory] = useState({turn: [], gameState: []})

  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner(squares));
    
  }, [squares]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    if(!winner){
      const newSquares = [...squares];
      if (newSquares[i]) return;
      newSquares[i] = xIsNext ? "X" : "O";
      setSquares(newSquares);
      setXIsNext(!xIsNext);
      setGamehistory((prevHistory) => ({
        turn: [...prevHistory.turn, !xIsNext], 
        gameState: [...prevHistory.gameState, [...newSquares]] 
      }));
    }
    return 0;
  };

  //Restart game
  const handlRestart = () => {
    setWinner(null)
    setSquares(Array(9).fill(null)); 
    setXIsNext(true);
    setGamehistory({turn: [], gameState: []})
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <Board squares={squares} handleClick={handleClick} />
        <div style={{marginLeft: "20px"}} className="history">
          <h4>History</h4>
          <History gamehistory={gamehistory} setSquares={setSquares} handlRestart={handlRestart} setXIsNext={setXIsNext}/>
        </div>
      </div>
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
