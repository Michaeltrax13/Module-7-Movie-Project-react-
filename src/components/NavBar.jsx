import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/absolutecinema.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  function openMenu() {
    document.body.classList.add('menu--open');
  }

  function closeMenu() {
    document.body.classList.remove('menu--open');
  }

  return (
    <div className="nav">
      <Link to="/" className="nav__logo-link">
        <img src={logo} alt="Absolute Cinema Logo" className="logo" />
      </Link>

      {/* Desktop Navigation Links */}
      <div className="nav__links">
        <Link to="/" className="nav__link nav__link--white">Home</Link>
        <Link to="/" className="nav__link nav__link--white">Find your movie</Link>
        <Link to="/" className="nav__link nav__link--btn">Contact</Link>
      </div>

      {/* Mobile Hamburger Open Button */}
      <button className="btn__menu" onClick={openMenu} aria-label="Open menu">
        <FontAwesomeIcon icon="bars" />
      </button>

      {/* Mobile Menu Backdrop */}
      <div className="menu__backdrop">
        <button 
          className="btn__menu btn__menu--close" 
          onClick={closeMenu} 
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon="times" />
        </button>

        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Find your movie
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;