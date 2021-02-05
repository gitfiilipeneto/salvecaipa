import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/LandingHome'
import "./supp/DefaultStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar';
import ProductsPage from './components/ProductsPage';
import App from './components/app'



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

