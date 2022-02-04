import "./header.sass";

import React from "react";

import SearchNav from "./SearchNav.js";

const Header = () => {
  return (
    <div data-testid="header">
      <SearchNav />
    </div>
  );
};

export default Header;
