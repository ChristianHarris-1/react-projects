import * as React from 'react';
import './App.css'

// {itemName:, itemQuantity:}

function App() {
  const [shoppingList, setShoppingList] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <>
      <h1 className="title">Shopping List</h1>
      <SearchBar searchInput={searchInput}/>
      <ShoppingList shoppingList={shoppingList}/>   
    </>
  )
};

const SearchBar = ({searchInput}) => (
  <form className="search">
    <input type="text" className="searchInput" placeholder="Search. . ." value={searchInput}/>
    <input type="text" className="quantityInput" placeholder="How many?"/>
    <button type="submit" className="addButton">Add</button>
  </form>
);

const ShoppingList = ({shoppingList}) => (
  <ul className="shoppingList">
    {shoppingList.map((listItem) => {
      <ListItem itemName={listItem.itemName} quantity={listItem.quantity}/>
    })}
  </ul>
);

const ListItem = ({itemName, quantity}) => (
  <li className="listItem">
    <p className="itemName">{itemName}</p>
    <p className="itemQuantity">{quantity}</p>
    <button className="editButton">Edit</button>
    <button className="removeButton">X</button>
  </li>
);

export default App
