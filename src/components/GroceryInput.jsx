import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const Grocery = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addItem(e) {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please add an item');
      return;
    }
    setItems((prevArr) => [...prevArr, { text: inputValue, completed: false }]);
    toast.success(`${inputValue} added successfully`)
    setInputValue('');
  }

  function onDel(index) {
    const itemToDel = items[index].text
    setItems((prevArr) => prevArr.filter((_, idx) => idx !== index));
    toast.warn(`${itemToDel} deleted from the list`)
  }

  function toggleComplete(index) {
    setItems((prevArr) => 
      prevArr.map((item, idx) => 
        idx === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="grocery-container">
      <div className="grocery-header">
        <h1>Grocery Bud</h1>
      </div>
      <div className="input-container">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          id="grocery"
          type="text"
          placeholder="Add Grocery"
          value={inputValue}
        />
        <button
          onClick={addItem}
          id="btn"
        
        >
          Add Item
        </button>
      </div>
      <div className="items">
        <ul>
          {items.map((item, idx) => (
            <li key={idx} className={item.completed ? "completed" : ""}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(idx)}
              />
              <span>{item.text}</span>
              <button className="delete-btn" onClick={() => onDel(idx)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer 
       position="top-center" 
       autoClose={3000} 
       hideProgressBar={false}
       newestOnTop={true}
       closeOnClick 
       rtl={false} 
       pauseOnFocusLoss 
       draggable 
       pauseOnHover 
       
     />
    </div>
     
  );
};

export default Grocery;
