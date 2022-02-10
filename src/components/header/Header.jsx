import "./header.sass";

import React from "react";

import SearchNav from "./SearchNav.js";
import MainNav from "./MainNav.js";

const Header = () => {
  return (
    <div data-testid="header-div">
      <SearchNav />
      <MainNav />
    </div>
  );
};

export default Header;
