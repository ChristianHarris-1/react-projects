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
  const [currentPlayerMessage, setCurrentPlayerMessage] = React.useState('next player')
  
  React.useEffect(() =>
    checkWin()
  , [gameState]);

  React.useEffect(() =>
    updateMessage()
  , [gameOver]);

  React.useEffect(() =>
    updateCurrentMoveValue()
  , [gameState, gameOver]);

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
  };
  
  const handleMakeMove = (boardSquareIndex) => {
    if (gameState[boardSquareIndex] == null && !gameOver) {
      setGameState(gameState.map((element, index) => {
        if (boardSquareIndex === index) {
          return currentMoveValue;
        }
        return element;
      }))
    }
  };

  const updateMessage = () => {
    if (gameOver) {
      setCurrentPlayerMessage('Winner!')
    }
  }

  const updateCurrentMoveValue = () => {
    setCurrentMoveValue((currentMoveValue === 'X') ? 'O' : 'X');
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <PlayerInfoBoard currentPlayerMessage={currentPlayerMessage} currentPlayer={currentMoveValue}/>
      <Board gameState={gameState} handleMakeMove={handleMakeMove}/>
    </>
  )
};

const Board = ({gameState, handleMakeMove}) => (
  <div className='board'>
    <div className='boardRow'>
      <BoardSquare boardSquareIndex={0} 
                    boardSquareValue={gameState[0]}
                    onMakeMove={handleMakeMove}/>
      <BoardSquare boardSquareIndex={1}
                    boardSquareValue={gameState[1]}
                    onMakeMove={handleMakeMove}/>
      <BoardSquare boardSquareIndex={2}
                    boardSquareValue={gameState[2]}
                    onMakeMove={handleMakeMove}/>
    </div>
    <div className='boardRow'>
      <BoardSquare boardSquareIndex={3} 
                    boardSquareValue={gameState[3]}
                    onMakeMove={handleMakeMove}/>
      <BoardSquare boardSquareIndex={4}
                    boardSquareValue={gameState[4]}
                    onMakeMove={handleMakeMove}/>
      <BoardSquare boardSquareIndex={5}
                    boardSquareValue={gameState[5]}
                    onMakeMove={handleMakeMove}/>
    </div>
    <div className='boardRow'>
      <BoardSquare boardSquareIndex={6} 
                    boardSquareValue={gameState[6]}
                    onMakeMove={handleMakeMove}/>
      <BoardSquare boardSquareIndex={7}
                    boardSquareValue={gameState[7]}
                    onMakeMove={handleMakeMove}/>
      <BoardSquare boardSquareIndex={8}
                    boardSquareValue={gameState[8]}
                    onMakeMove={handleMakeMove}/>
    </div>
  </div>
);

const BoardSquare = ({boardSquareIndex, boardSquareValue, onMakeMove}) => (
  <div className='boardSquare'
        onClick={() => onMakeMove(boardSquareIndex)}>
          {boardSquareValue}
  </div>
);

const PlayerInfoBoard = ({currentPlayerMessage, currentPlayer}) => (
  <div className='playerInfoBoard'>
    <PlayerIcon playerIcon={'X'} currentPlayer={currentPlayer}/>
    <p className='playerMessage'>{currentPlayerMessage}</p>
    <PlayerIcon playerIcon={'O'} currentPlayer={currentPlayer}/>
  </div>
)

const PlayerIcon = ({playerIcon, currentPlayer}) => {
  return (
    (currentPlayer === playerIcon)
      ?
      <span className='playerIcon currentPlayer'>{playerIcon}</span>
      :
      <span className='playerIcon'>{playerIcon}</span>
  )
}

export default App;