import "./App.css";

import React from "react";

import Header from "../src/components/header/Header.js";
import PageContent from "../src/components/page_content/PageContent.js";

function App() {
  return (
    <>
      <div data-testid="app-div">
        <Header />
        <PageContent />
      </div>
    </>
  );
}

export default App;
