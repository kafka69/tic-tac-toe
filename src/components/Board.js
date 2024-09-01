import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          {squares.slice(0,3).map((value, i)=>(<Square
          key={i}
          value={value}
          handleClick={() => handleClick(i)} 
          />))}
        </div>
        <div className="board-row">
        {squares.slice(3,6).map((value, i)=>(<Square
          key={i+3}
          value={value}
          handleClick={() => handleClick(i+3)} 
          />))}
        </div>
        <div className="board-row">
        {squares.slice(6, 9 ).map((value, i)=>(<Square
          key={i + 6} 
          value={value}
          handleClick={() => handleClick(i + 6)} 
          />))}
        </div>
      </div>
    </div>
  );
}
