import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

function App() {
  return (
    <div>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/item/:firebaseId" element={<ItemPage />} /> 
          <Route path="/home/cart" element={<CartPage />} />   
          <Route path="/home/checkout" element={<CheckoutPage />} />  
        </Routes>        
    </div>
  )
}

export default App;
