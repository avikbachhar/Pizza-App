import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/home';
import OrderPizza from './components/orderPizza';
import BuildPizza from './components/buildPizza';
import Shopping from './components/shopping';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/order' element={<OrderPizza/>}></Route>
      <Route path='/shopping' element={<Shopping/>}></Route>
      <Route path='/build' element={<BuildPizza/>}></Route>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
