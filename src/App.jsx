import "./App.css";
import { useState } from "react";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";
import Form from "./components/Form";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  //spreading (...) creates a brand new array, which is the correct, immutable way to update state in React.
  //(items) => [...items, item] : using the function form guarantees you don't lose updates due to stale closures, safer to use.
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
