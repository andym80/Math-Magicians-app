import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav id="navbar">
      <h1 id="top-heading">
        <span>Math Magicians</span>
      </h1>
      {' '}
      <div id="nav-links">
        <Link to="/" className="link">Home</Link>
        <Link to="/calculator" className="link">Calculator</Link>
        <Link to="/quote" className="link">Quote</Link>
      </div>
    </nav>
  </>
);
export default Navigation;
