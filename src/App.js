import logo from './logo.svg';
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mobilepage from './stores/pages/Mobilepage';
import Computerpage from './stores/pages/Computerpage';
import Speakerpage from './stores/pages/Speakerpage';
import Watchepage from './stores/pages/Watchepage';
import Singlemobilepage from './stores/pages/Singlemobilepage';
import Singlecomputerpage from './stores/pages/Singlecomputerpage';
import Cart from './stores/pages/Cart';
import SingleMenpage from './stores/pages/SingleMenpage';
import Womanpage from './stores/pages/Womanpage';
import Furniturespage from './stores/pages/Furniturespage';
import Loginpage from './stores/pages/Loginpage';
import SingleProduct from './stores/pages/SingleProduct';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<Mobilepage />} />
        <Route path='/computers' element={<Computerpage />} />
        <Route path='/speakers' element={<Speakerpage />} />
        <Route path='/watches' element={<Watchepage />} />
        <Route path='/mobile/:id' element={<Singlemobilepage />} />
        <Route path='/computer/:id' element={<Singlecomputerpage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/menfashion/' element={<SingleMenpage />} />
        <Route path='/womanfashion/' element={<Womanpage />} />
        <Route path='/furnitures/' element={<Furniturespage />} />
        <Route path='/login/' element={<Loginpage />} />
        <Route path='/speaker/:id' element={<SingleProduct />} />
        <Route path='/watch/:id' element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
