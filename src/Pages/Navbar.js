import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (

    <div className="nav-container">
      <h1 className="math-magicians">Math Magicians</h1>
      <div className="options-container">
        {links.map((link) => (
          <li className="navbar-item" key={link.id}>
            <NavLink to={link.path} className="active-link">{link.text}</NavLink>
          </li>
        ))}
      </div>
    </div>

  );
};

export default Navbar;
