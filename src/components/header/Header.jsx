import React from "react";

import "./header.sass";
import SearchNav from "./SearchNav.jsx";
import MainNav from "./MainNav.jsx";

const Header = () => {
  return (
    <div data-testid="header-div">
      <SearchNav />
      <MainNav />
    </div>
  );
};

export default Header;
