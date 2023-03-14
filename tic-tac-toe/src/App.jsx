import React, { useState } from 'react'
import './App.css'

function App() {
  const [gameState, setGameState] = React.useState(
    Array(9).fill(1)
  )

  return (
    <Board gameState={gameState}/>
  )
}

const Board = ({gameState}) => (
  <div className='board'>
    <div className='boardRow'>
      <BoardSquare index={0} boardSquareValue={gameState[0]}/>
      <BoardSquare index={1} boardSquareValue={gameState[1]}/>
      <BoardSquare index={2} boardSquareValue={gameState[2]}/>
    </div>
    <div className='boardRow'>
      <BoardSquare index={3} boardSquareValue={gameState[3]}/>
      <BoardSquare index={4} boardSquareValue={gameState[4]}/>
      <BoardSquare index={5} boardSquareValue={gameState[5]}/>
    </div>
    <div className='boardRow'>
      <BoardSquare index={6} boardSquareValue={gameState[6]}/>
      <BoardSquare index={7} boardSquareValue={gameState[7]}/>
      <BoardSquare index={8} boardSquareValue={gameState[8]}/>
    </div>
  </div>
);

const BoardSquare = ({index, boardSquareValue}) => (
  <div className='boardSquare'>{boardSquareValue}</div>
);

export default App;
