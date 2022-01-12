import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductPage from './components/pages/ProductPage';
import HomePage from './components/pages/HomePage';

const App = () => {
  //ルーティングの実装
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;