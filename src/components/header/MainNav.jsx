import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./main_nav.sass";

// const linkStyle = {
//   textDecoration: "none"
// };

const StyledLink  = styled(Link)`
  text-decoration: none;
`

const MainNav = () => {
  return (
    <div className="MainNav" data-testid="main-nav-div">
      <ul id="products-services-list" data-testid="products-services-list">
        <li><StyledLink to="/products">All Products</StyledLink></li>
        <li><StyledLink to="/products/deals">Latest Deals</StyledLink></li>
        <li><StyledLink to="/services" >Services</StyledLink></li>
        <li><StyledLink to="/products/giftcard" >Gift Cards</StyledLink></li>
      </ul>
      <ul id="profile-list" data-testid="profile-list">
        <li><StyledLink to="/products/giftcard" >Recent Orders</StyledLink></li>
        <li><StyledLink to="/products/giftcard" >Saved Items</StyledLink></li>
      </ul>
    </div>
  );
};

export default MainNav;
