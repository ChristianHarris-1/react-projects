import React, { useState } from 'react'
import './App.css'

function App() {
  const [gameState, setGameState] = React.useState(
    Array(9).fill(null)
  )
  const [currentMoveValue, setCurrentMoveValue] = React.useState('X');

  const onMakeMove = (boardSquareIndex) => {
    setGameState(gameState.map((element, index) => {
      if (boardSquareIndex === index) {
        return currentMoveValue;
      }
      return element;
    }))
  }

  return (
    <Board gameState={gameState} onMakeMove={onMakeMove}/>
  )
}

const Board = ({gameState, onMakeMove}) => (
  <div className='board'>
    <div className='boardRow'>
      <BoardSquare boardSquareIndex={0} 
                    boardSquareValue={gameState[0]}
                    makeMove={onMakeMove}/>
      <BoardSquare boardSquareIndex={1}
                    boardSquareValue={gameState[1]}
                    makeMove={onMakeMove}/>
      <BoardSquare boardSquareIndex={2}
                    boardSquareValue={gameState[2]}
                    makeMove={onMakeMove}/>
    </div>
    <div className='boardRow'>
      <BoardSquare boardSquareIndex={3} 
                    boardSquareValue={gameState[3]}
                    makeMove={onMakeMove}/>
      <BoardSquare boardSquareIndex={4}
                    boardSquareValue={gameState[4]}
                    makeMove={onMakeMove}/>
      <BoardSquare boardSquareIndex={5}
                    boardSquareValue={gameState[5]}
                    makeMove={onMakeMove}/>
    </div>
    <div className='boardRow'>
      <BoardSquare boardSquareIndex={6} 
                    boardSquareValue={gameState[6]}
                    makeMove={onMakeMove}/>
      <BoardSquare boardSquareIndex={7}
                    boardSquareValue={gameState[7]}
                    makeMove={onMakeMove}/>
      <BoardSquare boardSquareIndex={8}
                    boardSquareValue={gameState[8]}
                    makeMove={onMakeMove}/>
    </div>
  </div>
);

const BoardSquare = ({boardSquareIndex, boardSquareValue, makeMove}) => (
  <div className='boardSquare'
        onClick={() => makeMove(boardSquareIndex)}>
          {boardSquareValue}
  </div>
);

export default App;
