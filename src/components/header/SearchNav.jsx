import React from "react";

import "./search_nav.sass";

const SearchNav = () => {
  return (
    <div className="SearchNav" data-testid="search-nav-div">
      {/*
      * Current layout of this nav -
      * Logo+Name/Home link - Search Bar - Icon+Store/Location - Icon+Profile - Icon+Cart
      * ^ These probably SHOULD be broken up into their own components
      */}
        <div data-testid="search-nav-logo-div">
          <span id="search-nav-logo">&gt;./</span>
          <span id="search-nav-logo-text">sample</span>
        </div>
        <div>
          <input type="text" placeholder="Search products..." data-testid="search-nav-search"/>
          <button /*type="submit"/</div>*/>Search</button>
        </div>
        <div>
          {/* Pin icon prior */}
          [City Example]
        </div>
        <div>
          {/* Profile icon prior */}
          Profile
        </div>
        <div>
          {/* Shopping cart icon prior */}
          <span id="search-nav-cart-num" data-testid="search-nav-cart-num">1</span>
          <span>Cart</span>
        </div>
    </div>
  );
};

export default SearchNav;
