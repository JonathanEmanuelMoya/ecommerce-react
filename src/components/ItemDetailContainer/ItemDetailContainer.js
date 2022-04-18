import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import {getProductsById} from '../../mock/Items'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"


const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])


    return (
        <div className="ItemDetailContainer" >
            { 
                loading ? 
                    <h1>Loading...</h1> :
                product ? 
                    <ItemDetail  {...product} setCart={setCart} cart={cart}/> :
                    <h1>The product does not exist</h1> 
            }
        </div>
    )    
}

export default ItemDetailContainer;