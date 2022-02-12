import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.sass";
import Header from "../src/components/header/Header.jsx";
import MainPage from "./routes/page_content/main/MainPage.jsx";
import Products from "./routes/page_content/products/Products.jsx";
import Product from "./routes/page_content/products/Product.jsx";

function App() {
  return (
    <>
      <div data-testid="app-div">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="products" element={<Products />}>
              <Route path=":productId" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
