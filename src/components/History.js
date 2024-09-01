import React from "react";

export default function History({ gamehistory, setSquares,handlRestart ,setXIsNext}) {
    const handleMoveClick = (state,next)=>{
        setSquares(state)
        setXIsNext(next)
    }
  return (
    <ul>
      <li>
        <button onClick={()=>handlRestart()} className="restart-btn">
        Go to game start
        </button>
      </li>

      {gamehistory.gameState.length > 0 ? (
        gamehistory.gameState.map((historyItem, index) => (
          <li key={index}>
            <button onClick={()=>handleMoveClick(historyItem,gamehistory.turn[index])}>Go to move {index + 1}</button>
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
}
