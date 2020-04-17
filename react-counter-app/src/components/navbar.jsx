import React, { Component } from 'react';

// Stateless functional Component
const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered');
  
  return(
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#"
        >
        Potatoes
          <span className=" badge badge-pill badge-secondary m-1">
            {totalCounters}
          </span>
      </a>
    </nav>
  );
};

export default NavBar;
