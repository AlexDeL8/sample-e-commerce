import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.sass";
import Header from "../src/components/header/Header.jsx";
import MainPage from "./routes/main/MainPage.jsx";
import Products from "./routes/products/Products.jsx";
import ProductPreview from "./routes/products/ProductPreview.jsx";
import Giftcards from "./routes/products/giftcards/Giftcards.jsx";
import Memberships from "./routes/memberships/Memberships.jsx";


function App() {
  return (
    <>
      <div data-testid="app-div">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="products/" element={<Products />}>
              <Route path=":productId/" element={<ProductPreview />} />
              <Route path="giftcards/" element={<Giftcards />} />
            </Route>
            <Route path="memberships/" element={<Memberships />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
