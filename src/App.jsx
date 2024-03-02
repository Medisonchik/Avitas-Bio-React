import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import { clearLocalStorage } from './utilityFunction/clearLocalStorage';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    clearLocalStorage(5*60*1000);

  }, []);

  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:firebaseId" element={<ItemPage />} /> 
          <Route path="/cart" element={<CartPage />} />   
          <Route path="/checkout" element={<CheckoutPage />} />  
        </Routes>        
    </div>
  )
}

export default App;
