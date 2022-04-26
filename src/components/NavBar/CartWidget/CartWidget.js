import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../../context/CartContext'


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div className="CartWidget">
            <img src='./images/cart.png' alt='cart' className='CartImg' style={{width: 30}}/>
            {getQuantity()}
        </div>
    )
}

export default CartWidget
