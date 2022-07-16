import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <l1 key={url.id}>
            <NavLink to={url.url}>{ url.text }</NavLink>
          </l1>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar
