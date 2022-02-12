import React from "react";
import { Link } from "react-router-dom";

import "./main_nav.sass";

const MainNav = () => {
  return (
    <ul data-testid="main-nav-div">
      <li><Link to="/products">All Products</Link></li>
      <li><Link to="/products/deals">Latest Deals</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/products/giftcard">Gift Cards</Link></li>
    </ul>
  );
};

export default MainNav;
