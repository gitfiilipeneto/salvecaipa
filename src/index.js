import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/LandingHome'
import "./supp/DefaultStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar';
import ProductsPage from './components/ProductsPage';
import MyComponent from './components/renderCardsButton';


ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Home />
    <ProductsPage/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

