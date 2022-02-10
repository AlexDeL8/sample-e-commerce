import "./App.sass";

import React from "react";

import Header from "../src/components/header/Header.jsx";
import PageContent from "../src/components/page_content/PageContent.jsx";

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
