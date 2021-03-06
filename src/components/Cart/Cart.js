import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <>
        <h1>Carrito de Compras</h1>
        <ul>
            {
                cart.map(prod => <li key={prod.id}>{prod.name}  Cantidad: {prod.quantity} Precio Unidad: ${prod.price}  Subtotal: ${prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>X</button></li>)
            }   
        </ul>
        </>
    )
}

export default Cart