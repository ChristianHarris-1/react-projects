import React, { useState, useEffect } from 'react'
import './App.css'

const possibleWinIndices = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];


function App() {
  const [gameState, setGameState] = React.useState(
  Array(9).fill(null)
  )
  const [gameOver, setGameOver] = React.useState(false);
  const [currentMoveValue, setCurrentMoveValue] = React.useState('O');
  const [currentPlayerMessage, setCurrentPlayerMessage] = React.useState('Next Move')
  
  React.useEffect(() =>
    checkWin()
  , [gameState]);

  React.useEffect(() =>
    updateMessage()
  , [gameOver])

  const checkWin = () => {
    possibleWinIndices.map((winIndices) => {
      if (gameState[winIndices[0]] === 
          gameState[winIndices[1]] &&
          gameState[winIndices[1]] ===
          gameState[winIndices[2]] &&
          gameState[winIndices[2]] != null) {
        setGameOver(true);
      }
    })
    if (!gameOver) {
      setCurrentMoveValue((currentMoveValue === 'X') ? 'O' : 'X');
    }
  };
  
  const onMakeMove = (boardSquareIndex) => {
    if (gameState[boardSquareIndex] == null) {
      setGameState(gameState.map((element, index) => {
        if (boardSquareIndex === index) {
          return currentMoveValue;
        }
        return element;
      }))
    }};

  const updateMessage = () => {
    if (gameOver) {
      setCurrentPlayerMessage('Winner!')
    }
  }

  return (
    <>
      <PlayerInfoBoard currentPlayerMessage={currentPlayerMessage}/>
      <Board gameState={gameState} onMakeMove={onMakeMove}/>
    </>
  )
};

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

const PlayerInfoBoard = ({currentPlayerMessage}) => (
  <div className='playerInfoBoard'>
    <PlayerIcon playerIcon={'X'}/>
    <p className='playerMessage'>{currentPlayerMessage}</p>
    <PlayerIcon playerIcon={'O'}/>
  </div>
)

const PlayerIcon = ({playerIcon}) => (
  <span className='playerIcon'>{playerIcon}</span>
)

export default App;