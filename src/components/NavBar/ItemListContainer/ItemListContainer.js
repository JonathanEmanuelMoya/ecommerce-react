import { useState, useEffect } from "react"
import {getProducts} from '../../../mock/Items'
import ItemList from '../../ItemList/ItemList'
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    const handleOnResize = (e) => {
        console.log(e)
    }

    useEffect(() => {
        window.addEventListener('resize', handleOnResize)

        return(() => {
            window.removeEventListener('resize', handleOnResize)
        })
    }, [])

    const handleClick = () => {
        console.log('Hice click')
    }

    return(
        <div onClick={handleClick}>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer;