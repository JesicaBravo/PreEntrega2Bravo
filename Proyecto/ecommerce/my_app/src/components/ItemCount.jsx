import {useState} from "react";
const stock = 4;
export const ItemCount = () => {
    const [count, setCount] = useState(1);

    const handleDecreaseCount = () => {
        if(count > 1){
        setCount((prev) => prev -1);
    }
}
const handleIncreaseCount = () => {
    if(stock > count){
    setCount((prev) => prev +1);
}
}
const onAdd = () => {
    alert(count)
}

    return (
    <div className="itemCount">
        <span onClick={handleDecreaseCount}>-</span>
        <span>{count}</span>
        <span onClick={handleIncreaseCount}>+</span>  
        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
 )
}














/*import './App.css';
import ItemCount from './components/ItemCount';

import React from "react";

function ItemCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Items requeridos: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}
*/
export default ItemCount;