import React, { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [boardSquareValues, setBoardSquareValues] = React.useState(
    Array(9).fill(null)
  );
  
  const handleMakeMove = (boardSquareIndex) => {
    if (boardSquareValues[boardSquareIndex] || checkForWin(boardSquareValues)) {
      return;
    }
    setBoardSquareValues(boardSquareValues.map((element, index) => {
      if (boardSquareIndex === index) {
        return getCurrentPlayerValue(boardSquareValues);
      }
      return element;
    }))
  };

  const currentPlayerMessage = (checkForWin(boardSquareValues)) ? 'Winner!' : 'next player';

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <PlayerInfoBoard boardSquareValues={boardSquareValues} currentPlayerMessage={currentPlayerMessage}/>
      <Board boardSquareValues={boardSquareValues} handleMakeMove={handleMakeMove}/>
    </>
  )
};

const Board = ({boardSquareValues, handleMakeMove}) => (
  <div className='board'>
    <div className='boardRow'>
      <BoardSquare boardSquareValue={boardSquareValues[0]}
                    onMakeMove={() => handleMakeMove(0)}/>
      <BoardSquare boardSquareValue={boardSquareValues[1]}
                    onMakeMove={() => handleMakeMove(1)}/>
      <BoardSquare boardSquareValue={boardSquareValues[2]}
                    onMakeMove={() => handleMakeMove(2)}/>
    </div>
    <div className='boardRow'>
      <BoardSquare boardSquareValue={boardSquareValues[3]}
                    onMakeMove={() => handleMakeMove(3)}/>
      <BoardSquare boardSquareValue={boardSquareValues[4]}
                    onMakeMove={() => handleMakeMove(4)}/>
      <BoardSquare boardSquareValue={boardSquareValues[5]}
                    onMakeMove={() => handleMakeMove(5)}/>
    </div>
    <div className='boardRow'>
      <BoardSquare boardSquareValue={boardSquareValues[6]}
                    onMakeMove={() => handleMakeMove(6)}/>
      <BoardSquare boardSquareValue={boardSquareValues[7]}
                    onMakeMove={() => handleMakeMove(7)}/>
      <BoardSquare boardSquareValue={boardSquareValues[8]}
                    onMakeMove={() => handleMakeMove(8)}/>
    </div>
  </div>
);

const BoardSquare = ({boardSquareValue, onMakeMove}) => (
  <div className='boardSquare'
        onClick={onMakeMove}>
          {boardSquareValue}
  </div>
);

const PlayerInfoBoard = ({boardSquareValues, currentPlayerMessage}) => {
  const currentPlayer = (currentPlayerMessage !== 'Winner!')
    ? getCurrentPlayerValue(boardSquareValues)
    : getPreviousPlayerValue(boardSquareValues)
  return (
    <div className='playerInfoBoard'>
      <PlayerIcon playerIcon={'X'} currentPlayer={currentPlayer}/>
      <p className='playerMessage'>{currentPlayerMessage}</p>
      <PlayerIcon playerIcon={'O'} currentPlayer={currentPlayer}/>
    </div>
  )
}

const PlayerIcon = ({playerIcon, currentPlayer}) => (
  (currentPlayer === playerIcon)
    ?
    <span className='playerIcon currentPlayer'>{playerIcon}</span>
    :
    <span className='playerIcon'>{playerIcon}</span>
)

export default App;

const getCurrentPlayerValue = (boardSquareValues) => {
  const moveCount = 9 - boardSquareValues.filter((boardSquareValue) => boardSquareValue === null).length;
  return (moveCount % 2) ? 'O' : 'X';
};

const getPreviousPlayerValue = (boardSquareValues) => {
  const moveCount = 9 - boardSquareValues.filter((boardSquareValue) => boardSquareValue === null).length;
  return ((moveCount - 1) % 2) ? 'O' : 'X';
}

function checkForWin(boardSquareValues) {
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

  for (const winIndices of possibleWinIndices) {
    if (boardSquareValues[winIndices[0]] === boardSquareValues[winIndices[1]] && 
        boardSquareValues[winIndices[1]] === boardSquareValues[winIndices[2]] && 
        boardSquareValues[winIndices[0]]) {
      return true;
    }
  }
  return false;
}