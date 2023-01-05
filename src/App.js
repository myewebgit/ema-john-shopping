import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import SignUp from './components/Register/SignUp';
import RequireAuth from './components/RequireAuth/RequirAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Order></Order>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
