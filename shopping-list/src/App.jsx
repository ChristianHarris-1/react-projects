import * as React from 'react';
import './App.css'

function App() {
  const [shoppingList, setShoppingList] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const [quantityInput, setQuantityInput] = React.useState("");

  const handleAddItem = (event, searchInput, quantityInput) => {
    // Prevent duplicate items from being added to shoppingList since itemName is used as the key and needs to be unique
    if (!shoppingList.some((listItem) => listItem.itemName.toLowerCase() === searchInput.toLowerCase())) {
      setShoppingList([...shoppingList, {itemName: searchInput, itemQuantity: quantityInput}]);
    }
    event.preventDefault();
  }

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  }

  const handleQuantityInput = (event) => {
    setQuantityInput(event.target.value);
  }

  const handleRemoveItem = (itemName) => {
    setShoppingList(shoppingList.filter((listItem) => (
      listItem.itemName != itemName
    )))
  }

  return (
    <>
      <h1 className="title">Shopping List</h1>
      <SearchBar searchInput={searchInput} quantityInput={quantityInput} onSearchInput={handleSearchInput} onQuantityInput={handleQuantityInput} onAddItem={handleAddItem}/>
      <ShoppingList shoppingList={shoppingList} handleRemoveItem={handleRemoveItem}/>   
    </>
  )
};

const SearchBar = ({searchInput, quantityInput, onSearchInput, onQuantityInput, onAddItem}) => (
  <form className="search" onSubmit={() => {
    onAddItem(event, searchInput, quantityInput)}}
  >
    <input type="text" className="searchInput" placeholder="Search. . ." value={searchInput} onChange={onSearchInput}/>
    <input type="text" className="quantityInput" placeholder="How many?" value={quantityInput} onChange={onQuantityInput}/>
    <button type="submit" className="addButton">Add</button>
  </form>
);

const ShoppingList = ({shoppingList, handleRemoveItem}) => (
  <ul className="shoppingList">
    {shoppingList.map((listItem) => (
      <ListItem key={listItem.itemName} itemName={listItem.itemName} itemQuantity={listItem.itemQuantity} onRemoveItem={handleRemoveItem}/>  
    ))}
  </ul>
);

const ListItem = ({itemName, itemQuantity, onRemoveItem}) => (
  <li className="listItem">
    <p className="itemName">{itemName}</p>
    <p className="itemQuantity">{itemQuantity}</p>
    <button className="editButton">Edit</button>
    <button className="removeButton" onClick={() => 
      onRemoveItem(itemName)}
    >
      X
    </button>
  </li>
);

export default App
