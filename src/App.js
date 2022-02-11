import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.sass";
import Header from "../src/components/header/Header.jsx";
import PageContent from "./routes/page_content/PageContent.jsx";

function App() {
  return (
    <>
      <div data-testid="app-div">
        <BrowserRouter>
          <Header />
          <PageContent />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
