import React from 'react';
import { NavLink } from 'react-router-dom';
import contactImage from '../images/contact-icon.png';

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
      <div className="icon">
        <img src={contactImage} className="image" alt="contact-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
