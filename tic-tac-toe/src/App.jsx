import React, { useState } from 'react'
import './App.css'

function App() {
  return (
    <Board/>
  )
}

const Board = () => (
  <div className='board'>
    <div className='boardRow'>
      <BoardSquare/>
      <BoardSquare/>
      <BoardSquare/>
    </div>
    <div className='boardRow'>
      <BoardSquare/>
      <BoardSquare/>
      <BoardSquare/>
    </div>
    <div className='boardRow'>
      <BoardSquare/>
      <BoardSquare/>
      <BoardSquare/>
    </div>
  </div>
);

const BoardSquare = () => (
  <div className='boardSquare'></div>
);

export default App;
