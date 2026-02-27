import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './pages/Products';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './state/store';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </Provider>
  );
}

export default App


// echo "# E-COMMERCE-API" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/kundan865/E-COMMERCE-API.git
// git push -u origin main
