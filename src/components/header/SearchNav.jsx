import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./search_nav.sass";

const linkStyle = {
  textDecoration: "none"
};

const SearchNav = () => {
  return (
    <div className="SearchNav" data-testid="search-nav-div">
      {/*
      * Current layout of this nav -
      * Logo+Name/Home link - Search Bar - Icon+Store/Location - Icon+Profile - Icon+Cart
      * ^ These probably SHOULD be broken up into their own components
      */}
      <div id="search-nav-logo" data-testid="search-nav-logo">
        <Link to="/" style={linkStyle}>
          <span id="search-nav-logo-icon">&gt;./</span>
          <span id="search-nav-logo-text">sample</span>
        </Link>
      </div>
      <div id="search-nav-search">
        <input id="searchbar" type="text" placeholder="Search products" data-testid="searchbar"/>
        <button id="searchbar-button"/*type="submit"/</div>*/>Search</button>
      </div>
      <div id="search-nav-infos" data-testid="search-nav-infos">
        <div>
          {/* Pin icon prior */}
          <span className="SearchNavInfo">? City Example</span>
        </div>
        <div>
          {/* Profile icon prior */}
          <span className="SearchNavInfo">(^) Profile</span>
        </div>
        <div>
          {/* Shopping cart icon prior */}
          <span className="SearchNavInfo">\--,<span id="search-nav-cart-num" data-testid="search-nav-cart-num">1</span> Cart</span>
        </div>
      </div>
    </div>
  );
};

export default SearchNav;
