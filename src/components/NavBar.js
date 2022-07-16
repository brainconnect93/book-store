import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar = () => {
  const urls = [
    {
      id: 1,
      url: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      url: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className="navbar">
      <h1 className="nav-head">Bookstore CMS</h1>

      <ul className="nav-menu">
        {urls.map((url) => (
          <li className="nav-item" key={url.id}>
            <NavLink to={url.url}>{ url.text }</NavLink>
          </li>
        ))}
      </ul>

      <FontAwesomeIcon icon={regular('coffee')} />
    </nav>
  );
};

export default Navbar;
