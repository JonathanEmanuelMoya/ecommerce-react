import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)

    const decrement = (count) => {
        if(stock > 1){
            setCount(count - 1)
        }
    }

    const increment = (count) => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    return(
        <div>
            <button onClick={decrement}>-</button> 
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 



export default ItemCount;