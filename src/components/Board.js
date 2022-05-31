import React from "react";
import Square from "./Square";

export default function Board({ cells, onClick }) {

  return (
    <div className="game">
      <div className="board">
        {
          cells.map((item, index) =>
          (<Square
            key={index}
            value={item}
            handleClick={() => onClick(index)}
          >
          </Square>))}
      </div>

    </div>

  );
}
