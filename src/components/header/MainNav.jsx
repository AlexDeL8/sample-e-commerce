import React from "react";
import { Link } from "react-router-dom";

import "./main_nav.sass";

const MainNav = () => {
  return (
    <div data-testid="main-nav-div">
      <Link to="/products">=All</Link>
    </div>
  );
};

export default MainNav;
