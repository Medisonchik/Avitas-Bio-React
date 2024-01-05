import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ItemPage from './ItemPage';

function App() {
  console.log('app component rendered');
  return (
    <div>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/item/:firebaseId" element={<ItemPage />} />      
        </Routes>        
    </div>
  )
}
/* function App() {
  return (
    <div>
      <HomePage />      
    </div>
  )
} */

export default App;
