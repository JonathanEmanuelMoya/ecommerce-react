import './App.css';
import { useState, createContext } from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from './components/Form/Form'
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './components/Notification/Notification';
import Cart from './components/Cart/Cart';




export const Context = createContext()

const App = () => {
  

  return (
    <div className="App">
      
      

      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            {/*<Notification />*/}
            <NavBar />
            {/* <Link to='/form' className='Option' > Form </Link> */}
            <Routes>
              <Route path='*' element={<h1>NOT FOUND 404</h1>} />
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/form' element={<Form />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
