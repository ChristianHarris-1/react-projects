import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1 className="title">Shopping List</h1>
      <SearchBar/>
      <ShoppingList/>   
    </>
  )
};

const SearchBar = () => (
  <form className="search">
    <input type="text" className="searchInput" placeholder="Search. . ."/>
    <input type="text" className="quantityInput" placeholder="How many?" default={1}/>
    <button type="submit" className="addButton">Add</button>
  </form>
);

const ShoppingList = () => (
  <div className="shoppingList">
    <ListItem itemName="Item1" quantity="1"/>
    <ListItem itemName="Item2" quantity="2"/>
    <ListItem itemName="Item3" quantity="3"/>
  </div>
);

const ListItem = ({itemName, quantity}) => (
  <div className="listItem">
    <p className="itemName">{itemName}</p>
    <p className="itemQuantity">{quantity}</p>
    <button className="editButton">Edit</button>
    <button className="removeButton">X</button>
  </div>
);

export default App
