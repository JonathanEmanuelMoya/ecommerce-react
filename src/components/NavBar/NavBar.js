import './NavBar.css'
import CartWidget from './CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../mock/Items'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return (
        <nav className="NavBar" >
            <Link to='/'>
                <img src='./images/logo192.png' alt="logo" style={{width: 60}}/>
            </Link>
            <div className="Categories">
                {categories.map(cate => <NavLink key={cate.id} to={`/category/${cate.id}`}
                    className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}
                >{cate.description}</NavLink>)}
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar
