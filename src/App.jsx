import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import useAPI from './api/fetchItemApi'
import HomePage from './components/Homepage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './style/app.css';

function App() {
  const{items: fetchedItems, error, loading} = useAPI();
  const [items, setItems] = useState([]);
  const[cartItem, setCart] = useState([]);

  useEffect(() =>{
    console.log("useEffect fired - fetched items:", fetchedItems);
    if(fetchedItems.length > 0){
      setItems(fetchedItems.map((item) => ({...item, count: item.count ?? 1})));
    }
  }, [fetchedItems])
  
  const addtocart = (item) =>{
    setCart((prev) =>{
      const exists = prev.some((cartItem) => cartItem.id === item.id);

      if(exists){
        return prev.map((cartItem) =>
          cartItem.id === item.id ? {...cartItem, count: item.count}: cartItem
        );
      }
      console.log("items in cart:", cartItem)
      return [...prev, item];
    });
  }

  return (
    <div>
      <nav>
        <ul className='routes'>
          <li className='link'><NavLink to="/">HomePage</NavLink></li>
          <li className='link'><NavLink to="/shop">Store</NavLink></li>
          <li className='link'><NavLink to="/cart">Cart ({cartItem.length})</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route 
          path='/shop'
          element = {
            <Shop
            items={items}
            setItems={setItems}
            onAddToCart={addtocart}
            loading={loading}
            error={error}
            />
          }
        />
        <Route
          path='/cart'
          element = {
            <Cart 
              cartItems={cartItem}
              setCart={setCart}
            />
          }  
        />
      </Routes>
    </div>
  )
}

export default App
